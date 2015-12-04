urlParser.bind({
  provider: 'coub',
  parse: function (url) {
    "use strict";
    var match,
      id;
    match = url.match(/(?:\/view\/)([a-zA-Z\d]+)/i);
    id = match ? match[1] : undefined;
    if (!id) {
      return undefined;
    }
    return {
      'mediaType': 'video',
      'id': id
    };
  },
  defaultFormat: 'long',
  formats:{
    long: function(vi, params){
      "use strict";
      return 'https://coub.com/view' + vi.id + combineParams({params: params});
    },
    embed: function(vi, params){
      "use strict";
      return '//coub.com/embed/' + vi.id + combineParams({params: params});
    }
  }
});
