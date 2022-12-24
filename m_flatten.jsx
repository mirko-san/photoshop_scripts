// **********
// Copyright(c) 2022 mirko-san

// This code snippet is released under the MIT License.
// http://opensource.org/licenses/mit-license.php

// 入稿用データ作成スクリプト
// すべてのパスを削除
// "_" で始まるレイヤーセットを強制的に非表示
// 画像の結合
// レイヤー名を "image" に変更
// **********

function deleteAllPath() {
  var pathItems = app.activeDocument.pathItems;
  pathItems.removeAll();
}

function toInvisibleLayerSet(pattern) {
  for (var i = 0; i < app.activeDocument.layers.length; i++) {

    var layer = app.activeDocument.layers[i];

    if (layer.typename !== "LayerSet" && !pattern.test(layer.name)) {
      continue;
    }
    layer.visible = false;
  }
}

// **********
// main
// **********
var regexp = /^_/;

deleteAllPath();
toInvisibleLayerSet(regexp);

// 画像を結合
app.activeDocument.flatten();

// レイヤー名を "image" に変更
for (var i = 0; i < app.activeDocument.layers.length; i++) {
  var layer = app.activeDocument.layers[i];

  layer.name = "image";
}
