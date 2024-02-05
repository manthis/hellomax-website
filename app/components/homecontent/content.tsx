import Button from '../button';

export default function Content() {
    return (
        <div
            id='content'
            className='relative z-10 flex w-full origin-left items-center justify-between duration-500 landscape:mt-8'>
            <div className='relative z-50 max-w-[600px]'>
                <h4 className='text-2xl font-normal tracking-widest text-lightblue landscape:text-lg'>Hello,</h4>
                <h2 className='my-4 text-7xl  text-white landscape:my-2 landscape:text-6xl landscape:xl:text-9xl'>
                    I&apos;m Max
                </h2>
                <h3 className='text-2xl font-light leading-[1.5em] text-white landscape:2xl:text-3xl'>
                    Blockchain CTO & Full Stack Engineer
                </h3>
                <p className='mb-[20px] mt-[10px] text-base italic text-white landscape:text-sm'>
                    Empowering Your Business: Engineering Excellence in Crafting Apps, Elevating Teams, and Scaling
                    Success!
                </p>

                <Button label="Let's meet" />
                <Button label='Hire me' />
            </div>
        </div>
    );
}
