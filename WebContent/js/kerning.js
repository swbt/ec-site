//文字のカーニングを行いたいときのjavascript

( function() {

    var data = {

        "（": [-0.5,    0],
        "）": [   0, -0.5],
        "『": [-0.5,    0],
        "』": [   0, -0.5],
        "【": [-0.5,    0],
        "】": [   0, -0.5],
        "「": [-0.5,    0],
        "」": [   0, -0.5],
        "、": [   0, -0.3],
        "。": [   0, -0.3],
        "　": [   0, -0.6],
        "・": [-0.3, -0.3],
        "！": [-0.25, -0.1],
        "っ": [-0.15, -0.15],
        "ゃ": [-0.15, -0.15],
        "ゅ": [-0.15, -0.15],
        "ょ": [-0.15, -0.15],
        "ッ": [-0.15, -0.15],
        "ャ": [-0.15, -0.15],
        "ュ": [-0.15, -0.15],
        "ョ": [-0.15, -0.15],
        "ェ": [-0.15, -0.15],
        "ィ": [-0.15, -0.15]

    };

    String.prototype.kerning = function() {

        var length = this.length, result = [];

        for ( var i = 0, chr; chr = this[i]; i++ ) {

            if ( typeof data[chr] === 'undefined' ) {

                result.push( chr );
                continue;
            }

            if ( typeof data[chr] === 'string' ) {

                result.push( data[chr] );
                continue;
            }

            var styles = [];

            if ( data[chr][0] !== 0 ) {

                styles.push( 'margin-left:' + data[chr][0] + 'em;' );
            }

            if ( data[chr][1] !== 0 ) {

                styles.push( 'margin-right:' + data[chr][1] + 'em;' );
            }

            if ( styles.length !== 0 ) {

                result.push( '<span style="display:inline-block;' + styles.join( '' ) + '">' + chr + '</span>' );

            } else {

                result.push( chr );
            }
        }

        return result.join( '' );

    };

} )();