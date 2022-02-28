

export default function Time(){
// date.getTime() returns the milliseconds since the invention of it, in java script.
    const date = new Date();

    const daysPassed = () => {
        const currentTime: any = new Date(date.getTime());
        const previousTime: any = new Date(date.getFullYear(), 0, 1);
        
        return Math.ceil(((currentTime - previousTime + 1) / 86400000));
    }

    // defining hours minutes and seconds;
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    // total passed seconds in a day
    const totalPassedSeconds = hours*3600 + minutes*60 + seconds;
    // converting total passed seconds to SEKO in 24 hours
    // each Seko is 0.96 seconds.
    const totalPassedSeko = totalPassedSeconds / 0.96;
    // it updates every 100 seconds
    const totalPassedBiMino = totalPassedSeko /100;
    // Ora, Mino, Seko

    const currentBiOra = totalPassedBiMino/100;
    const currentBiMino =  (currentBiOra - Math.floor(currentBiOra))*100;
    const currentSeko = ((totalPassedSeko)/100 - Math.floor(totalPassedSeko/100))*100;
    const dato = Math.floor(daysPassed()/10);
    const dato1 = daysPassed() - Math.floor(daysPassed()/10)*10;

    return {currentBiMino,currentBiOra,currentSeko, dato,dato1};
};