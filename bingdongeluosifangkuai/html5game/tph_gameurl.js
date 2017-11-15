function get_gameurl()
{return parent.location.host.replace(/^.*?([^.]+\.[^.]+)$/g,"$1")}