import Button from '../button';

export default function Content() {
    return (
        <div id='content' className='relative z-10 flex w-full origin-left items-center justify-between duration-500'>
            <div className='relative z-50 max-w-[600px]'>
                <h4 className='text-2xl font-normal tracking-widest text-lightblue landscape:text-lg '>Hello,</h4>
                <h2 className='my-4 text-7xl leading-[1em] text-white landscape:text-5xl'>I&apos;m Max</h2>
                <h3 className='text-5xl font-light leading-[1.5em] text-white landscape:text-xl'>
                    Blockchain CTO & Full Stack Engineer
                </h3>
                <p className='mb-[20px] mt-[10px] text-base text-white landscape:text-sm'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quas vel distinctio eligendi optio
                    molestias debitis modi dignissimos similique inventore!
                </p>

                <Button label="Let's meet" />
                <Button label='Hire me' />
            </div>
        </div>
    );
}
