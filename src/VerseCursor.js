const ESV = require('./assets/ESV.json');
const ChiUns = require('./assets/ChiUns.json');
const BibleBookIndex = require('./assets/BibleBookIndex.json');

export class VerseCursor {
    constructor(book, chapter, verse) {
        this.book = Number(book);
        this.chapter = Number(chapter);
        this.verse = Number(verse);
    }
    
    equals(that) {
        return this.book === that.book 
        && this.chapter === that.chapter 
        && this.verse === that.verse;
    }

    getVerseNumber() {
        return this.chapter + ':' + this.verse;
    }

    getVerse() {
        return ChiUns.books[this.book].chapters[this.chapter].verses[this.verse].text
        + '\n' + ESV.books[this.book].chapters[this.chapter].verses[this.verse].text;
    }

    next() {
        if (ChiUns.books[this.book].chapters[this.chapter].verses[this.verse + 1]) {
            return new VerseCursor(this.book, this.chapter, this.verse + 1);
        } else if (ChiUns.books[this.book].chapters[this.chapter + 1]) {
            return new VerseCursor(this.book, this.chapter + 1, 0);
        } else if (ChiUns.books[this.book+1]) {
            return new VerseCursor(this.book + 1, 0, 0);
        } else {
            return null;
        }
    }

    static fromOsis(osisText) {
        let [bookName, chapter, verse] = osisText.split('.');
        chapter = Number(chapter) - 1;
        verse = Number(verse) - 1;
        if (!verse) {
            verse = '0';
        }
        return new VerseCursor(BibleBookIndex[bookName.toLowerCase()], chapter, verse);
    }
}