
// import React ,{useState} from 'react';




// const DownloadFile =(props)=>{
//     const download =(event,data)=>{
//         event.preventDefault();
//         const output = JSON.stringify({data}, 
//             null, 4);
//         const blob = new Blob([output]);                   // Step 3
//         const fileDownloadUrl = URL.createObjectURL(blob); // Step 4
//         SetfileDownloadUrl ({fileDownloadUrl: fileDownloadUrl}, // Step 5
//           () => {
//             this.dofileDownload.click();                   // Step 6
//             URL.revokeObjectURL(fileDownloadUrl);          // Step 7
//             SetfileDownloadUrl({fileDownloadUrl: ""})
//         })
       
//     // The hidden anchor element:
    
//     }
//     const [fileName, SetfileName] = useState(null);
// const [fileDownloadUrl, SetfileDownloadUrl] = useState(null);
// return(
//     <React.Fragment>
 
//  <button onClick={this.download(props.allData)}>
//             Download the file!
//           </button>
// <a 
//          download={fileName}
//          href={fileDownloadUrl}
//          ref={e=>this.dofileDownload = e}

//     >download it</a>
//     </React.Fragment>
// )

// };

// export default DownloadFile;