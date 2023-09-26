export async function logger(loggerUrl, appName,message){
    const url = `${loggerUrl}${appName}`;
    try{
        const response = await fetch(url,{
            method:'POST',
            body:message
        });
        const responseData = await response.json();
        return responseData;
    }catch(error){
        console.error('Error:',error);
    }
}

// (async()=>{
//  await logger('http://52.35.59.116/','test','New user logged in');
// })()