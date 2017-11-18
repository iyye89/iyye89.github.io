var CCConfig = (function () {
    function CCConfig() {
        this.COCOS2D_DEBUG = 2;
        this.box2d = false;
        this.chipmunk = true;
        this.showFPS = true;
        this.loadExtension = true;
        this.frameRate = 60;
        this.tag = 'gameCanvas';
        //    engineDir = 'http://192.168.189.1/html5/cocos2d/cocos2d-html5/tags/Cocos2d-html5-v2.2.2/cocos2d/';
        //    engineDir = 'http://192.168.189.1/jijie/Cocos2d-html5-v2.2.2/cocos2d/';
        //        engineDir='http://www.cocos2d-x.org/html5-samples/cocos2d/';
        //        engineDir='cocos2d/';
        this.engineDir = '';
        this.SingleEngineFile = 'jsLib/Cocos2d-html5-v2.2.2.min.js';
        //    SingleEngineFile = null;
        this.renderMode = 1;
        this.appFilesMini = [
            'jsLib/howler.js',
            'jsLib/SimpleAudioEngine.js',
            'jsLib/platformTx.js',
            'jsLib/typedarray.js',
            'jsLib/zip.js',
            'jsLib/inflate.js',
            'jsLib/TweenMax.min.js',
            'game.min.js'
        ];
        this.appFilesFull = [
            'jsLib/howler.js',
            'jsLib/SimpleAudioEngine.js',
            'jsLib/platformTx.js',
            'jsLib/typedarray.js',
            'jsLib/zip.js',
            'jsLib/inflate.js',
            'jsLib/TweenMax.min.js',
            'src/timonxue/utils/Dictionary.js',
            'src/timonxue/utils/DictionaryEx.js',
            'src/timonxue/events/EventDispatcher.js',
            'src/timonxue/events/Event.js',
            'src/timonxue/displayObject/DisplayObject.js',
            'src/timonxue/displayObject/TextureAtlas.js',
            'src/timonxue/displayObject/IInteractiveObject.js',
            'src/timonxue/displayObject/InteractiveObject.js',
            'src/timonxue/displayObject/InteractiveNodeRGBA.js',
            'src/timonxue/displayObject/InteractiveLayer.js',
            'src/timonxue/displayObject/InteractiveSprite.js',
            'src/timonxue/displayObject/Bitmap.js',
            'src/timonxue/displayObject/BitmapData.js',
            'src/timonxue/displayObject/DragObject.js',
            'src/timonxue/displayObject/MovieClip.js',
            'src/timonxue/ccs/WidgetEx.js',
            'src/timonxue/ccs/ImageViewMovieClip.js',
            'src/timonxue/events/MouseTouchEvent.js',
            'src/timonxue/math/Matrix.js',
            'src/timonxue/utils/Utils.js',
            'src/timonxue/utils/Attach.js',
            'src/timonxue/utils/SharedObjectUtil.js',
            'src/timonxue/utils/Timer.js',
            'src/timonxue/debug/WSSLog.js',
            'src/timonxue/debug/Trace.js',
            'src/timonxue/debug/FPSSniffer.js',
            'src/timonxue/ccTx/FixBug2_2_2.js',
            'src/riverrun/localization/Localization.js',
            'src/riverrun/localization/LocalizationEvent.js',
            'src/riverrun/localization/LocalizationSelector.js',
            'src/riverrun/Filter.js',
            'src/riverrun/ColorTransform.js',
            'src/riverrun/SoundManager.js',
            'src/riverrun/ResPathManager.js',
            'src/riverrun/PreLoader.js',
            'src/riverrun/Linker.js',
            'src/riverrun/ZipProxy.js',
            'src/riverrun/Model.js',
            'src/riverrun/ui/IUiLoading.js',
            'src/TweenMax/ZTweenMax.js',
            'src/game/data/Data.js',
            'src/game/data/UserProfile.js',
            'src/game/events/UIEvents.js',
            'src/game/ui/AbstractScreen.js',
            'src/game/ui/UiLoading.js',
            'src/game/ui/UiMainMenu.js',
            'src/game/ui/UiWelcome.js',
            'src/game/ui/UiSelectBottle.js',
            'src/game/ui/UiThawy.js',
            'src/game/ui/UiAddPage.js',
            'src/game/ui/UiPainting.js',
            'src/game/ui/UiRemovePage.js',
            'src/game/ui/UiStyle.js',
            'src/game/ui/UiSelectBg.js',
            'src/game/ui/UiResult.js',
            'src/game/ui/Page.js',
            'src/game/ui/StyleItem.js',
            'src/game/ui/Ping.js',
            'src/game/ui/UiManager.js',
            'src/game/utils/Cheat.js',
            'src/game/utils/MouseMove.js',
            'src/game/Game.js',
            'src/Root.js',
            'src/Resources.js'
        ];
    }
    return CCConfig;
})();

//---------------------------------------------------------------------------------------------------------------------------------------
var Boot = (function () {
    function Boot() {
        window.addEventListener('DOMContentLoaded', function () {
            var config = new CCConfig();

            //            config["appFiles"] = config["appFilesFull"];
            config["appFiles"] = config["appFilesMini"];

            //first load engine file if specified
            var script = document.createElement('script');

            /*********Delete this section if you have packed all files into one*******/
            if (config.SingleEngineFile && !config.engineDir) {
                script.src = config.SingleEngineFile;
            } else if (config.engineDir && !config.SingleEngineFile) {
                script.src = config.engineDir + 'jsloader.js';
            } else {
                alert('You must specify either the single engine file OR the engine directory in "cocos2d.js"');
            }

            /*********Delete this section if you have packed all files into one*******/
            //s.src = 'Packed_Release_File.js'; //IMPORTANT: Un-comment this line if you have packed all files into one
            document.body.appendChild(script);
            document["ccConfig"] = config;
            script.id = 'cocos2d-html5';
            //else if single file specified, load singlefile
        });
    }
    return Boot;
})();
new Boot();
//# sourceMappingURL=Boot.js.map
