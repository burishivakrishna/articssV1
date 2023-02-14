import feature1 from "./Feature_icon_01.svg";
import feature2 from "./Feature_icon_02.svg";
import feature3 from "./Feature_icon_03.svg";
import feature4 from "./Feature_icon_04.svg";

import Image from "next/image";

const features =()=>{
    return(
        <section className="features" >
            <h2 className="section-heading">Features</h2>
            <div className="grid">
                <div className="feature">
                <Image
                src={feature1}
                alt="logo"
                width="60"
                height="60" 
                />
                <h3>Intelligent CSS Generation</h3>
                <p className="text-secondary">Our AI generates CSS styles that are optimized for different resolutions.</p>
                </div>
                <div className="feature">
                <Image
                src={feature2}
                alt="logo"
                width="60"
                height="60" 
                />
                <h3>Customizable</h3>
                <p className="text-secondary">Create custom styles tailored to your specific layout and design requirements.</p>
                </div>
                <div className="feature">
                <Image
                src={feature3}
                alt="logo"
                width="60"
                height="60" 
                />
                <h3>Easy Saving and Exporting</h3>
                <p className="text-secondary">Save your styles and export them easily.</p>
                </div>
                <div className="feature">
                <Image
                src={feature4}
                alt="logo"
                width="60"
                height="60" 
                />
                <h3>Responsive Design</h3>
                <p className="text-secondary">Our AI technology generates CSS styles that are optimized for different screen resolutions and devices.</p>
                </div>
            </div>
        </section>
    )
};

export default features;