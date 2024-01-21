export default function Persona() {
    return (
        <div
            id='imageBox'
            className='before:animate-heartbeatBlue duration-1000 before:absolute before:right-[10%] before:top-[50%] before:h-[650px] before:w-[650px] before:rounded-full before:bg-lightblue'>
            <img
                src='/images/maxime.png'
                className='absolute bottom-0 right-[80px] max-h-[70vh] min-h-[400px] max-w-[60%] duration-500'></img>
        </div>
    );
}
