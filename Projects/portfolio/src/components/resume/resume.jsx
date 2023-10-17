import './resume.css'
export const Resume=()=>{
    const handleDownloadClick = () => {
        const content = "This is the content of the file.";
        const temp = new temp([content], { type: 'text/plain' });
        const url = window.URL.createObjectURL(temp);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'resume-shiwang.txt'; 
        a.click();
        window.URL.revokeObjectURL(url);
      };
      
      
    return (
        <div className='resume'>
             <button onClick={handleDownloadClick}  className='download'>Download Resume</button>
        </div>
    )
}