import './resume.css'
export const Resume=()=>{
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = 'https://drive.google.com/file/d/11VlKFQjpKU5-dW-0xxiuQZt1_UoXlYy-/view?usp=sharing' ; 
        link.download = 'shiwang-resume.pdf'; 
        link.target = '_blank';
        link.click();
      };
      
      
    return (
        <div className='resume'>
             <button onClick={handleDownload}  className='download'>Download Resume</button>
        </div>
    )
}