 

 function solve(input){
    class Song {
        constructor(name, time){
            this.name=name;
            this.time=time;
        }
    
        toString(){
            console.log(this.name);
        }
     }

    const count = input.shift();
    const songs = {};
    for (let i = 0; i < count; i++) {
        const [typeList, name, time]= input.shift().split('_');
        if (!songs[typeList]) {
            songs[typeList]=[];
        }

        songs[typeList].push(new Song(name,time));
    }

    const typeList = input.shift();
    
    if (typeList==="all") {
        for (const playlist of Object.values(songs)) {
            playlist.forEach(song=>song.toString());
        }
    } else{
        
        songs[typeList].forEach(song=>song.toString())
    }

 }

 solve([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']);
