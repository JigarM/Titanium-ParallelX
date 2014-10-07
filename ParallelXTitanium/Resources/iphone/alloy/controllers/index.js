function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "#999",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.sample = Ti.UI.createImageView({
        image: "/images/a.jpg",
        top: 0,
        width: Titanium.UI.FILL,
        height: 150,
        zIndex: 10,
        id: "sample"
    });
    $.__views.index.add($.__views.sample);
    $.__views.__alloyId1 = Ti.UI.createView({
        backgroundColor: "transparent",
        height: "150dp",
        id: "__alloyId1"
    });
    $.__views.table = Ti.UI.createTableView({
        top: 0,
        bottom: 0,
        separatorColor: "#918922",
        headerView: $.__views.__alloyId1,
        id: "table"
    });
    $.__views.index.add($.__views.table);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var tableData = [];
    var defaultFontSize = 18;
    var name = [ "John Doe", "James Smith", "John Carter", "Jmaes Steen", "Charles Doe", "John Doe", "Charles Steve", "Steve Doe", "Duck Doe", "Dan Lee", "John Carter" ];
    for (var i = 1; 19 >= i; i++) {
        var row = Ti.UI.createTableViewRow({
            className: "forumEvent",
            selectedBackgroundColor: "white",
            rowIndex: i,
            height: 70,
            hasChild: true
        });
        var imageAvatar = Ti.UI.createImageView({
            image: "/images/" + i + ".png",
            left: 10,
            top: 5,
            width: 50,
            height: 50
        });
        row.add(imageAvatar);
        var labelDate = Ti.UI.createLabel({
            color: "#999",
            font: {
                fontFamily: "Arial",
                fontSize: defaultFontSize,
                fontWeight: "bold"
            },
            text: name[Math.floor(10 * Math.random() + 1)],
            left: 65,
            right: 10
        });
        row.add(labelDate);
        tableData.push(row);
    }
    $.table.setData(tableData);
    $.table.addEventListener("scroll", function(e) {
        var scrollOffset = e.contentOffset.y;
        var height, top;
        if (0 > scrollOffset) {
            height = 150 - scrollOffset;
            top = 0;
        } else {
            height = 150;
            top = 0 - scrollOffset / 2;
        }
        $.sample.height = height;
        $.sample.top = top;
    });
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;