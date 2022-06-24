const myDiary = document.querySelector('#myDiary');
const diaryTweetsContainer = document.querySelector('#diaryTweets');
let entryNum = 0;

myDiary.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const diaryTweetInput = myDiary.elements.diaryTweet;
    if (diaryTweetInput.value !== ' ') {
      addDiaryTweets(diaryTweetInput.value);
      diaryTweetInput.value = " ";
    }

})

const addDiaryTweets = (diaryTweet) => {
    const newDiaryTweet = document.createElement('li');
    const diaryEntryNum = document.createElement('b');
    const nextLine = document.createElement('br');
    newDiaryTweet.style.paddingBottom = '30px';
    newDiaryTweet.style.textAlign = 'justify';
    entryNum++;
    diaryEntryNum.append(`My Diary Entry# ${entryNum}`);
    newDiaryTweet.append(diaryEntryNum);
    newDiaryTweet.append(nextLine);
    newDiaryTweet.append(` ${diaryTweet}`);
    diaryTweetsContainer.append(newDiaryTweet);
}
