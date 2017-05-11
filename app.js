'use strict';

function getWordCountObj (text) {
    var words = text.trim().split(' ');
    var wordCounter = {};
    for (var i = 0; i < words.length; i++) {
        wordCounter[words[i]] ? wordCounter[words[i]] += 1 : wordCounter[words[i]] = 1;
    }
    return wordCounter;
}

function getWordCount (wordCounter) {
    var count = 0;
    for (var key in wordCounter) {
        count += wordCounter[key];
    }
    return count;
}

function getUniqueWordCount (wordCounter) {
    debugger;
    var words = Object.keys(wordCounter);
    return words.length;
}

function getAvgWordLength (text) {
    var totalWordsLength = text.trim().split(' ').join('').length;
    var totalWordCount = text.split(' ').length;
    return totalWordsLength / totalWordCount;
}

function analyzeOnSubmit () {
    $("#text-analyzer").submit(function(event) {
        var userText = $("#user-text").val();
        var wordCounter = getWordCountObj(userText);
        $(".text-report").removeClass("hidden");
        $(".js-word-count").text(getWordCount(wordCounter));
        $(".js-unique-word-count").text(getUniqueWordCount(wordCounter));
        $(".js-avg-word-length").text(getAvgWordLength(userText));
        event.preventDefault();
    })
}

analyzeOnSubmit();