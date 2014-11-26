var lib = fl.getDocumentDOM().library
for(var i=0;i<lib.items.length;i++){
	var item = lib.items[i];
	if(item instanceof BitmapItem){
		item.compressionType = "lossless"
	}
}
