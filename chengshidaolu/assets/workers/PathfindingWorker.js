var tileArray = []; //{tile: Tile}[][]

function Point(x, y) {
    this.x = x;
    this.y = y;
}

//path node class used for pathfinding
function PathNode (x, y, parent, roadEntry, roadExit) {
    this.x = x;
    this.y = y;
    this.parent = parent;
    this.roadEntry = roadEntry;
    this.roadExit = roadExit;
}

onmessage = function(e) {

    if (e.data) {
        var data = e.data;
        switch (data.call) {
            case "tilesInitiated":
                tileArray = data.tiles;
                break;
            case "findPath":
                findPath(data.startNode, data.endNode);
                break;
            case "tileUpdated":
                tileArray[data.tileY][data.tileX].tile.roadPositions = data.roadPositions;
                postMessage({call: 'tileUpdated'});
                break;
            case "tilesSwapped":
                var tile1 = tileArray[data.tile1Y][data.tile1X].tile;
                tileArray[data.tile1Y][data.tile1X].tile = tileArray[data.tile2Y][data.tile2X].tile;
                tileArray[data.tile2Y][data.tile2X].tile = tile1;
                postMessage({call: 'tilesSwapped'});
                break;
            case "tileRemoved":
                tileArray[data.tileY][data.tileX].tile = null;
                postMessage({call: 'tileRemoved'});
                break;
            case "clearTiles":
                tileArray = [];
                postMessage({call: 'clearTiles'});
                break;
        }
    } else {
        console.log('PathfindingWorker did not recieve data', e);
    }
}

findPath = function(startNode, endNode) {//PathNode[] {
    //object with nodes {"nodeX_nodeY":PathNode} that still need to be checked
    var openList = {}; //any
    openList[startNode.y + '_' + startNode.x] = startNode;
    //object with nodes {"nodeX_nodeY":PathNode} that are checked
    var closedList = {}; //any
    var current; //PathNode
    var i; //number
    var neighbors; //PathNode[]
    var currNeighbor; //PathNode
    var key; //string
    var possiblePaths = []; //PathNode[]
    //while there are still objects in the open list, continue searching
    while (Object.keys(openList).length > 0) {
        for (key in openList) {
            if (openList.hasOwnProperty(key)) {
                //take one node from the open list
                current = openList[key];
                possiblePaths.push(current);
                //remove node from open list
                delete openList[key];
                //found endpos, return path
                if (current.x === endNode.x && current.y === endNode.y) {
                    var completePath = this.constructPath(current); //PathNode[]
                    completePath.push(startNode);
                    var reversedPath = []; //PathNode[]
                    var index = completePath.length - 1; //number
                    for (index; index >= 0; index--) {
                        reversedPath.push(completePath[index]);
                    }
                    //this.completeGoal(reversedPath);

                    //this.highlighPath(completePath);
                    postMessage({call: 'goalFound', path: completePath, reversedPath: reversedPath});
                    //no need to highlight path, goal has been found
                    return;
                }
                //add current node to closed list
                closedList[current.y + '_' + current.x] = current;
                //get surrounding grid positions
                neighbors = this.getNeighbors(current);
                for (i = 0; i < neighbors.length; i++) {
                    currNeighbor = neighbors[i];
                    //node is not already contained in closed list
                    if (!closedList.hasOwnProperty(currNeighbor.y + '_' + currNeighbor.x)) {
                        //node is not already contained in open list
                        if (!openList.hasOwnProperty(currNeighbor.y + '_' + currNeighbor.x)) {
                            //add neighbor to open list
                            openList[currNeighbor.y + '_' + currNeighbor.x] = currNeighbor;
                        }
                    }
                }
            }
        }
    }
    //no path found to end position found, don't do anything
    //(possiblePaths is an array with the connecting paths from starting point, can be used if needed)
    //postMessage({call: 'partialPathFound', path: possiblePaths});
}

constructPath = function(endNode) { //endNode: PathNode, returns PathNode[]
    //construct a path from end node to start node, using all the parent node of all the nodes
    var path = []; //PathNode[]
    var currNode = endNode; //PathNode
    //every node has a parent except for the start node
    while (currNode.parent != null) {
        path.push(currNode);

        if (currNode.x < currNode.parent.x && currNode.y === currNode.parent.y) {
            currNode.roadEntry = new Point(1, 2);
            currNode.parent.roadExit = new Point(1, 0);
        }

        if (currNode.x > currNode.parent.x && currNode.y === currNode.parent.y) {
            currNode.roadEntry = new Point(1, 0);
            currNode.parent.roadExit = new Point(1, 2);
        }

        if (currNode.x === currNode.parent.x && currNode.y > currNode.parent.y) {
            currNode.roadEntry = new Point(0, 1);
            currNode.parent.roadExit = new Point(2, 1);
        }

        if (currNode.x === currNode.parent.x && currNode.y < currNode.parent.y) {
            currNode.roadEntry = new Point(2, 1);
            currNode.parent.roadExit = new Point(0, 1);
        }

        currNode = currNode.parent;
    }

    return path;
}

getNeighbors = function(node) { //node: PathNode, returns PathNode[]
    var neighbors = []; //PathNode[]
    var oriRoadId; //number
    var neighborRoadId; //number
    //check if surrounding grid positions are free or is the end node
    // - - - - - - - - - - - - - - - NORTH - - - - - - - - - - - - - - -
    if (node.y !== 0 && //node has positive x index (else it will have no neighbor)
        tileArray[node.y - 1][node.x].tile !== null && //there is a tile in this position
        tileArray[node.y - 1][node.x].tile.roadPositions.length > 0) { //the tile has roads
        oriRoadId = tileArray[node.y][node.x].tile.roadPositions[0][1]; //get the road position at the top middle
        neighborRoadId = tileArray[node.y - 1][node.x].tile.roadPositions[2][1]; //get the road position at the bottom middle

        if (oriRoadId !== 0 && neighborRoadId !== 0 && oriRoadId < 99 && neighborRoadId < 99) { //both roads exist and are not decorations
            //console.log('north');
            neighbors.push(new PathNode(node.x, node.y - 1, node));
        }
    }

    // - - - - - - - - - - - - - - - SOUTH - - - - - - - - - - - - - - -
    if (node.y + 1 < tileArray.length && //node is not the last in the column
        tileArray[node.y + 1][node.x].tile !== null && //there is a tile in this position
        tileArray[node.y + 1][node.x].tile.roadPositions.length > 0) { //the tile has roads
        oriRoadId = tileArray[node.y][node.x].tile.roadPositions[2][1]; //get the road position at the bottom middle
        neighborRoadId = tileArray[node.y + 1][node.x].tile.roadPositions[0][1]; //get the road position at the top middle

        if (oriRoadId !== 0 && neighborRoadId !== 0 && oriRoadId < 99 && neighborRoadId < 99) { //both roads exist and are not decorations
            //console.log('south');
            neighbors.push(new PathNode(node.x, node.y + 1, node));
        }
    }

    // - - - - - - - - - - - - - - - WEST - - - - - - - - - - - - - - -
    if (node.x !== 0 && //node has positive x index (else it will have no neighbor)
        tileArray[node.y][node.x - 1].tile !== null && //there is a tile in this position
        tileArray[node.y][node.x - 1].tile.roadPositions.length > 0) { //the tile has roads
        oriRoadId = tileArray[node.y][node.x].tile.roadPositions[1][0]; //get the road position at the middle left
        neighborRoadId = tileArray[node.y][node.x - 1].tile.roadPositions[1][2]; //get the road position at the middle right

        if (oriRoadId !== 0 && neighborRoadId !== 0 && oriRoadId < 99 && neighborRoadId < 99) { //both roads exist and are not decorations
            //console.log('west');
            neighbors.push(new PathNode(node.x - 1, node.y, node));
        }
    }

    // - - - - - - - - - - - - - - - EAST - - - - - - - - - - - - - - -
    if (node.x + 1 < tileArray[node.y].length && //node is not the last in the row
        tileArray[node.y][node.x + 1].tile !== null && //there is a tile in this position
        tileArray[node.y][node.x + 1].tile.roadPositions.length > 0) { //the tile has roads
        oriRoadId = tileArray[node.y][node.x].tile.roadPositions[1][2]; //get the road position at the middle right
        neighborRoadId = tileArray[node.y][node.x + 1].tile.roadPositions[1][0]; //get the road position at the middle left

        if (oriRoadId !== 0 && neighborRoadId !== 0 && oriRoadId < 99 && neighborRoadId < 99) { //both roads exist and are not decorations
            //console.log('east');
            neighbors.push(new PathNode(node.x + 1, node.y, node));
        }
    }

    return neighbors;
}