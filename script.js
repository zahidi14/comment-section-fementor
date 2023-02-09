const comment = document.querySelectorAll('.cardCont');
// const reply = document.querySelector('.cardCont-reply');

const getData = async () => {
    return await fetch('./data.json')
    .then(async (response) => { 
      try {
        const data = await response.json();
        console.log(data);
        return data;
      } catch (err) {
        console.log(err);
      }
    });
  } 
  
localStorage.clear();

getData().then(data => {
    for (let i = 0; i <= data.comments.length; i++){
        console.log(data.comments[i]);
        comment[i].querySelector('.name').innerText = data.comments[i].user.username
        comment[i].querySelector('.commentText').innerText = data.comments[i].content    
        comment[i].querySelector('.score').innerText = data.comments[i].score
        comment[i].querySelector('.time').innerText = data.comments[i].createdAt
        
        
    }
})


