import Blob from './blob';
import Card from './card';
import Service from './service';

const Services = () => {
    return (
        <section
            id='services'
            className='relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-darkblue to-dracula py-20 text-white'>
            <Blob />
            <div className='px-10 xl:px-0'>
                <h1 className='mb-10 w-full max-w-7xl text-left text-5xl font-semibold text-white '>Services</h1>
                <div className='z-0 flex w-full max-w-7xl flex-col items-center justify-center rounded-3xl bg-cover bg-fixed bg-center bg-no-repeat xl:bg-background2'>
                    <div className='w-full rounded-3xl xl:p-10 xl:backdrop-blur xl:backdrop-grayscale xl:backdrop-filter'>
                        <div className='flex w-full flex-col items-center justify-between xl:flex-row'>
                            <Card id='cto' title='CTO as a Service' image={'/images/services/cto.png'}></Card>
                            <Card
                                id='blockchain'
                                title='Blockchain Developer'
                                image={'/images/services/ethereum.png'}
                            />
                            <Card id='web2' title='Web2 Fullstack Engineer' image={'/images/services/web.png'} />
                        </div>
                    </div>
                </div>
                <div
                    id='cto-content'
                    className='mt-5 w-full max-w-7xl items-center justify-center rounded-3xl py-10 transition delay-1000'>
                    <div className='z-10 grid grid-flow-row-dense grid-cols-1 gap-10 xl:grid-cols-2'>
                        <Service title='Early Stage CTO' icon='/images/services/early.png' colspan={true}>
                            Embarking on your entrepreneurial journey, the selection of the right Chief Technology
                            Officer (CTO) becomes pivotal. Finding a partner whose technical skills and vision align
                            with yours presents a significant challenge. Herein lies the value of my unique offering as
                            an early stage CTO. I provide specialized guidance from your venture’s inception to your
                            first significant round of funding. Far from merely occupying a role temporarily, my aim is
                            to work closely with you, deeply understanding your vision, and establishing a solid
                            technical foundation critical for your company’s long-term growth.
                            <br />
                            <br />
                            In my capacity, I lead your technological strategy and assist in identifying and onboarding
                            the perfect CTO for your enduring success. This partnership is designed to ensure that your
                            tech infrastructure is not just adequate but superior, positioning your company for
                            unmatched success.
                            <br />
                            <br />
                            With my broad experience and strategic insights, I adeptly navigate the tech landscape’s
                            complexities. I ensure that your tech operations are not only innovative but also perfectly
                            aligned with your business objectives. Opting for my services means securing a strategic
                            partner committed to laying the technological groundwork essential for propelling your
                            company forward. Let’s embark on this journey together, creating a future where your company
                            doesn’t just grow but thrives.
                        </Service>
                        <Service title='CTO Screening' icon='/images/services/screening.png'>
                            Selecting the right Chief Technology Officer (CTO) is a critical decision for any company,
                            yet assessing candidates’ technical and leadership abilities can be challenging without the
                            requisite expertise. My “CTO Screening” service addresses this gap, offering a tailored
                            recruitment process to evaluate a candidate’s suitability for the CTO role comprehensively.
                            <br />
                            <br />
                            Through this service, I conduct a detailed assessment of a candidate’s skills, covering
                            essential areas such as technical knowledge, strategic thinking, leadership capabilities,
                            and their potential to foster innovation and growth. My approach ensures a holistic review
                            of the candidate’s qualifications against the diverse demands of the CTO position.
                            <br />
                            <br />
                            The objective is to provide you with a clear understanding of the candidate’s strengths and
                            areas for development, enabling an informed hiring decision. By leveraging my extensive
                            experience in tech leadership, I simplify the complexities of the CTO role, helping you
                            identify a candidate who possesses not just the technical skills, but also the vision and
                            leadership qualities necessary to drive your company’s success.
                            <br />
                            <br />
                            Choosing my “CTO Screening” service is a strategic investment in your company’s future,
                            ensuring the selection of a CTO who will significantly contribute to your technological and
                            organizational goals. Allow me to guide you in finding a candidate that stands out,
                            guaranteeing your company’s readiness for future challenges and opportunities.
                        </Service>
                        <Service title='On-Demand / Interim CTO' icon='/images/services/ondemand.png' colspan={true}>
                            In today’s fast-paced business world, having the right technical leadership is crucial for
                            success. This is where my “On Demand / Interim CTO” service comes into play. Available for
                            both part-time and full-time engagements, I step in to steer your technology vision and
                            execution with precision and agility.
                            <br />
                            <br />
                            Whether you’re navigating through a transitional phase, facing a critical project, or simply
                            in need of expert guidance to scale your tech, I am here to lead your team towards achieving
                            your strategic goals. With a deep understanding of both the startup ecosystem and
                            established tech landscapes, I bring a wealth of experience to rapidly solve complex
                            challenges, drive innovation, and ensure your tech operations align with your business
                            objectives.
                            <br />
                            <br />
                            Hiring me means more than just filling a gap; it’s about infusing your projects with
                            strategic insight, technical excellence, and a hands-on approach to leadership that fosters
                            team growth and product innovation. Let me take the helm of your technology department, and
                            together, we will navigate the complexities of the digital world, ensuring your company not
                            only survives but thrives in its competitive landscape.
                            <br />
                            <br />
                            This offer is designed to be flexible, adapting to your specific needs and timelines,
                            providing the strategic leadership necessary to elevate your tech, without the long-term
                            commitment of a full-time executive hire.
                        </Service>
                        <Service title='Engineering Audit & Optimisation' icon='/images/services/audit.png'>
                            In today’s competitive landscape, optimizing your engineering service is paramount to
                            driving innovation and efficiency. My “Engineering Service Audit and Optimization” offering
                            is tailored to empower your business by thoroughly evaluating your engineering operations.
                            This service meticulously audits your entire engineering department to pinpoint
                            inefficiencies, bottlenecks, and areas requiring improvement.
                            <br />
                            <br />
                            The process begins with a comprehensive examination, creating a detailed snapshot of your
                            current engineering landscape. I assess various aspects, including processes, team dynamics,
                            technology stacks, and workflow integration. The objective is to identify underperforming
                            areas and provide actionable recommendations to enhance performance, streamline processes,
                            and encourage a culture of excellence and continuous improvement.
                            <br />
                            <br />
                            Following the audit, I propose a set of tailored optimizations aimed at transforming your
                            engineering service. These recommendations range from process refinement and technology
                            adoption to team restructuring, all designed to align with your company’s strategic
                            objectives and drive significant improvements.
                            <br />
                            <br />
                            Choosing this service means committing to elevate your engineering capabilities, ensuring
                            they not only meet but exceed industry standards. Let me guide you in reshaping your
                            engineering department into a more efficient, innovative, and productive unit, laying the
                            groundwork for your company’s sustained success and growth.
                            <br />
                            <br />
                            This offering provides a strategic pathway to bolster your engineering service, ensuring
                            your organization remains at the forefront of technological advancement and operational
                            excellence.
                        </Service>
                        <Service title='Coaching' icon='/images/services/coach.png'>
                            My “CTO Coaching Service” is specifically designed for Chief Technology Officers seeking to
                            amplify their leadership and strategic skills in the rapidly changing tech environment. This
                            personalized service provides in-depth guidance, empowering CTOs to effectively address the
                            wide-ranging challenges of their role, from enhancing team performance and aligning
                            technological strategies with business objectives to fostering a culture of innovation and
                            continuous improvement.
                            <br />
                            <br />
                            The coaching sessions are tailored to each CTO’s specific needs, offering a safe space to
                            explore topics such as leadership development, innovation management, navigating tech
                            transitions, team dynamics, and integration with broader business strategies. This
                            comprehensive approach aims to furnish CTOs with strategic insights, practical advice, and
                            the confidence to lead with authority, implement best practices, and make impactful
                            decisions.
                            <br />
                            <br />
                            By engaging in this coaching, CTOs undertake a transformative journey to refine their
                            leadership capabilities, thereby driving their teams to achieve peak performance and making
                            significant contributions to their organizations. The service ensures a focused development
                            plan that aligns with both personal and organizational goals, facilitating sustained success
                            and innovation.
                            <br />
                            <br />
                            This partnership offers more than just coaching; it’s an investment in becoming an
                            exceptional leader capable of guiding your team and company to new heights in the
                            competitive tech industry.
                        </Service>
                        <Service title='Cyber CTO' icon='/images/services/cyber.png'>
                            In today’s interconnected world, cybersecurity is not just a necessity but a critical aspect
                            of any successful organization. My “Cyber CTO” service is specifically designed to meet this
                            need, providing leaders and CTOs with the expertise required to secure their information
                            systems, infrastructure, and applications comprehensively.
                            <br />
                            <br />
                            As your Cyber CTO, I bring a wealth of experience to the table, offering strategic guidance
                            and technical support to enhance your company’s cybersecurity posture. From risk assessments
                            to the implementation of cutting-edge security protocols, my service covers all bases to
                            ensure your digital assets are protected against evolving cyber threats.
                            <br />
                            <br />
                            A significant focus of this service is on empowering your engineering team. By instilling
                            best practices for secure development and providing access to the latest tools and
                            technologies, I aim to elevate your team’s capabilities, ensuring security is integrated at
                            every level of your development process. This approach not only mitigates risk but also
                            fosters a culture of security within your organization, contributing to a more robust and
                            resilient infrastructure.
                            <br />
                            <br />
                            Choosing my Cyber CTO service means prioritizing the security and integrity of your
                            business. Let me guide you through the complexities of cybersecurity, helping to safeguard
                            your operations, protect your data, and secure the trust of your customers and stakeholders.
                        </Service>
                        <Service title='Career Path' icon='' colspan={true}>
                            n today’s rapidly evolving tech landscape, crafting a clear and strategic career path is
                            vital for the growth and development of your technical team. My service as a CTO in creating
                            career paths is designed to empower tech companies with the tools and insights needed to
                            develop a structured progression plan for their engineering teams. This service not only
                            aims to clarify the steps necessary for individual advancement within the organization but
                            also ensures alignment with the company’s goals and objectives.
                            <br />
                            <br />
                            Leveraging my extensive experience as a CTO, I offer a comprehensive approach that
                            encompasses skill assessment, role definition, goal setting, and mentorship program
                            development. By identifying key competencies and milestones, I help you establish a
                            transparent and motivating career path that encourages continuous learning and professional
                            development. This not only aids in retaining top talent by providing clear growth
                            opportunities but also enhances the overall productivity and innovation within your tech
                            team.
                            <br />
                            <br />
                            Choosing my service means opting for a strategic partner dedicated to fostering a culture of
                            excellence and ambition within your organization. Together, we will design a career path
                            framework that not only meets the aspirations of your team members but also drives your
                            company forward in achieving its technological vision. Let’s collaborate to build a
                            nurturing environment where your engineers can thrive and contribute to your company’s
                            success at their fullest potential.
                        </Service>
                    </div>
                </div>
                <div
                    id='blockchain-content'
                    className=' mt-10 hidden w-full max-w-7xl items-center justify-center rounded-3xl py-10'>
                    <div className='grid grid-flow-row-dense grid-cols-1 gap-10 xl:grid-cols-2'>
                        <Service
                            title='Smart Contract / Solidity Development'
                            icon='/images/services/contract.png'
                            colspan={true}>
                            In the cutting-edge realm of blockchain, the creation and deployment of smart contracts
                            using Solidity stand as pivotal elements in crafting secure, efficient, and transparent
                            decentralized applications. My service specifically caters to organizations and individuals
                            looking to harness the power of blockchain technology through the development of Solidity
                            smart contracts.
                            <br />
                            <br />
                            With a strong emphasis on Solidity, the leading programming language for writing smart
                            contracts on Ethereum and other blockchain platforms, I provide comprehensive development
                            services from conceptualization to deployment. My expertise ensures that your smart
                            contracts are not only effectively designed to meet your unique requirements but are also
                            robust, secure, and optimized for gas efficiency, critical for successful blockchain
                            applications.
                            <br />
                            <br />
                            This service is ideal for projects aiming to automate transactions, create decentralized
                            finance (DeFi) applications, issue tokens, or establish complex decentralized autonomous
                            organizations (DAOs). By leveraging my deep understanding of blockchain technology and smart
                            contract development, I help clients navigate the complexities of the blockchain space,
                            ensuring their projects are built on solid, secure foundations.
                            <br />
                            <br />
                            Choosing my Solidity smart contract development service means partnering with a dedicated
                            expert focused on delivering high-quality, customized blockchain solutions. Let’s work
                            together to transform your innovative ideas into reality, leveraging the full potential of
                            blockchain technology to achieve unparalleled security, transparency, and efficiency in your
                            digital transactions.
                        </Service>
                        <Service title='dApp development' icon='/images/services/app.png'>
                            In the forefront of blockchain innovation, my dApp development service is tailored for
                            projects seeking to harness the transformative power of decentralized technology. Utilizing
                            Solidity for smart contract creation and integrating with the Ethereum ecosystem via
                            Ethers.js and Hardhat, I deliver comprehensive solutions. My expertise extends to employing
                            the Next.js framework, alongside other cutting-edge technologies like wagmi.sh, viem.sh, and
                            RainbowKit, to ensure a seamless and engaging user experience.
                            <br />
                            <br />
                            As a dedicated blockchain developer, I specialize in building scalable, secure dApps that
                            serve a wide range of applications, from DeFi platforms to NFT marketplaces. My approach
                            combines technical prowess with a keen understanding of user-centric design, ensuring that
                            every dApp is not only robust and efficient but also intuitive and accessible for end-users.
                            <br />
                            <br />
                            Choosing my dApp development service guarantees a partnership with an expert committed to
                            excellence and innovation. From the initial concept to the final deployment, I work closely
                            with clients to translate their vision into reality, prioritizing quality, security, and
                            user satisfaction.
                            <br />
                            <br />
                            By leveraging Solidity, Ethers.js, Hardhat, Next.js, Viem.sh, Wagmi.sh, and RainbowKit,
                            I&apos;m equipped to create dApps that are at the forefront of blockchain technology.
                            Let&apos;s collaborate to develop decentralized applications that push the boundaries of
                            what&apos;s possible, delivering significant value to your users and distinguishing your
                            project in the dynamic blockchain ecosystem.
                        </Service>
                        <Service title='Decentralized Platform Engineering' icon='/images/services/devops.png'>
                            In the blockchain sector, my “Decentralized Platform Engineering” service offers a vital
                            infrastructure and toolkit for developers adopting a DevSecOps approach. Aimed at providing
                            the necessary foundation for building, deploying, and maintaining secure, scalable
                            decentralized applications (dApps) and platforms, this service addresses the specific needs
                            of blockchain development.
                            <br />
                            <br />
                            Integrating decentralized infrastructure best practices with DevSecOps principles, my
                            service promotes a development lifecycle that emphasizes security, automated testing, and
                            continuous deployment. This approach enhances agility and robustness throughout the
                            development process.
                            <br />
                            <br />
                            Partnering with me gives you access to a range of services, including blockchain
                            infrastructure setup, smart contract development and audits, dApp deployment, and continuous
                            support. With expertise in leading blockchain technologies, I ensure your project is built
                            on a secure and scalable foundation.
                            <br />
                            <br />
                            Designed for any stage of development, my “Decentralized Platform Engineering” service is
                            ideal for startups and established enterprises alike, looking to innovate with blockchain
                            technology. Together, we can create a decentralized platform that is efficient, secure, and
                            ready for future challenges and opportunities.
                        </Service>
                    </div>
                </div>
                <div
                    id='web2-content'
                    className=' mt-10 hidden w-full max-w-7xl items-center justify-center rounded-3xl py-10'>
                    <div className='grid grid-flow-row-dense grid-cols-1 gap-10 xl:grid-cols-2'>
                        <Service title='Fullstack Web Developer' icon='/images/services/fullstack.png'>
                            In the fast-paced and ever-evolving world of web development, having a seamless and cohesive
                            full-stack capability is crucial for delivering comprehensive digital solutions. My
                            “Full-Stack Developer” service is meticulously crafted to bridge the gap between frontend
                            elegance and backend robustness, offering a unified development experience across the full
                            JavaScript or TypeScript stack. With deep expertise in both frontend and backend realms, I
                            leverage the power of leading frameworks like React for the frontend, along with Express.js
                            and Nest.js for the backend, to create dynamic, scalable, and intuitive web applications.
                            <br />
                            <br />
                            As a full-stack developer, I bring a holistic approach to project development, integrating
                            the responsive, user-friendly interfaces enabled by React with the efficient, secure
                            server-side logic of Express.js and Nest.js. This combination ensures not only the delivery
                            of visually appealing and engaging user experiences but also the robustness and scalability
                            of server and serverless architectures on the backend. My proficiency extends to
                            architectural designs, including Hexagonal Architecture and Domain-Driven Design (DDD),
                            ensuring that your project is built on a solid foundation that supports both current needs
                            and future growth.
                            <br />
                            <br />
                            Choosing my “Full-Stack Developer” service means partnering with a versatile developer who
                            understands the intricacies of both frontend and backend development. I am committed to
                            using my comprehensive skill set in JavaScript and TypeScript to build solutions that are
                            innovative, maintainable, and perfectly aligned with your strategic goals.
                            <br />
                            <br />
                            Let’s collaborate to create a full-stack solution that not only meets the technical demands
                            of today’s digital landscape but also provides a competitive edge in the market. With my
                            expertise, your project will be a testament to what’s possible when frontend creativity
                            meets backend efficiency, setting new standards for what full-stack development can achieve.
                        </Service>
                        <Service title='Frontend Web Developer' icon='/images/services/frontend.png'>
                            In the digital era, a compelling frontend is key to captivating users. My “Frontend
                            Developer React” service delivers expert UI development with React, ensuring dynamic,
                            responsive, and visually engaging web applications. Tailored for all business sizes, this
                            service leverages React’s component-based architecture for scalable and maintainable
                            solutions, facilitating easy updates.
                            <br />
                            <br />
                            I possess a thorough grasp of React’s ecosystem, utilizing hooks, state management (Redux or
                            Context API), and third-party libraries to enhance user experiences. Performance
                            optimization, SEO, and accessibility are also top priorities, aligning your web application
                            with the highest standards.
                            <br />
                            <br />
                            Choosing my service means opting for a developer dedicated to innovation and user-centric
                            designs. I collaborate closely with clients from concept to deployment, customizing projects
                            to specific needs and goals.
                            <br />
                            <br />
                            Opt for my “Frontend Developer React” service to elevate your digital presence, ensuring a
                            standout web application that fosters user engagement and project success. Let’s create a
                            React-based solution that truly resonates with your audience.
                        </Service>
                        <Service title='Backend Web Developer' icon='/images/services/backend.png'>
                            In the rapidly evolving landscape of web development, the backbone of any successful
                            application is a robust, scalable backend. My &eaquot;Backend Developer&eaquot; service is
                            intricately designed to offer not just development, but a comprehensive solution that aligns
                            with your business goals. As an expert in Express.js and Nest.js, I deliver the flexibility
                            and efficiency of these frameworks, enhancing your application’s server-side functionality.
                            My expertise doesn’t stop there; I’m also proficient in both server and serverless
                            architectures, ensuring optimal performance regardless of the deployment environment.
                            <br />
                            <br />
                            My approach to backend development is holistic, embracing both the practical and theoretical
                            aspects that make a solid foundation. I specialize in Hexagonal Architecture and
                            Domain-Driven Design (DDD), methodologies that prioritize maintainability and business logic
                            centrality. This expertise allows me to construct systems that are not only technically
                            sound but also aligned with your business strategy, ensuring that your backend architecture
                            can seamlessly evolve alongside your company.
                            <br />
                            <br />
                            Engaging with my service means choosing a developer who understands the nuances of creating
                            powerful backend systems. I combine my deep knowledge of Express.js and Nest.js with a
                            versatile skill set in server and serverless technologies, and an adeptness in Hexagonal
                            Architecture and DDD. This blend of skills ensures a backend that is not just a codebase,
                            but a strategic asset.
                            <br />
                            <br />
                            Let&eapos;s work together to build a backend that&eapos;s ready for the future, leveraging
                            my comprehensive expertise to create a solution that’s secure, scalable, and perfectly
                            tailored to your needs. With my guidance, your project will not only meet current web
                            standards but set new benchmarks for excellence in the digital realm.
                        </Service>
                        <Service title='Mobile Developer' icon='/images/services/mobile.png'>
                            In the dynamic landscape of mobile app development, delivering high-quality, cross-platform
                            applications is essential for reaching a wider audience. My “Mobile Developer React Native”
                            service provides comprehensive solutions for creating mobile applications using React
                            Native, enabling businesses to launch apps that perform seamlessly on both iOS and Android
                            platforms.
                            <br />
                            <br />
                            React Native combines the best aspects of native development with React, a best-in-class
                            JavaScript library for building user interfaces. This approach allows for the development of
                            rich, engaging mobile apps with a single codebase, significantly reducing development time
                            and costs while ensuring a consistent user experience across devices.
                            <br />
                            <br />
                            As a seasoned mobile developer, I bring a wealth of experience to your project, ensuring
                            that every aspect of your app, from its performance and responsiveness to its look and feel,
                            is optimized for user engagement and satisfaction. My service covers the entire app
                            development lifecycle, from concept and design to implementation, testing, and deployment,
                            incorporating the latest features and capabilities offered by React Native.
                            <br />
                            <br />
                            Choosing my “Mobile Developer React Native” service means partnering with a developer who
                            understands the intricacies of mobile app development and is committed to leveraging the
                            power of React Native to create stunning, high-performance applications. Let’s work together
                            to transform your vision into a reality, delivering a mobile app that not only meets but
                            exceeds your expectations, ensuring your business stays ahead in the competitive digital
                            marketplace.
                        </Service>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
