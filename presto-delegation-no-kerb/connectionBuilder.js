(function dsbuilder(attr) {
    var urlBuilder = "jdbc:presto://" + attr[connectionHelper.attributeServer] + ":" + attr[connectionHelper.attributePort] + "/hive/default";
    return [urlBuilder];
})
