import Image from "next/image";
import styles from "./page.module.css";
import Flexy from "../../../packages/global-assets/flexy.png"
import VioletShape from "../../../packages/global-assets/violet-shape.png"
import VioletShapeMobile from "../../../packages/global-assets/violet-shape-mobile.png"
import BlueSmile from "../../../packages/global-assets/blue-smile.png"
import VioletSmile from "../../../packages/global-assets/violet-smile.png"
import GreenSmile from "../../../packages/global-assets/green-smile.png"
import WhiteSmile from "../../../packages/global-assets/white-smile.png"
import WhiteHouse from "../../../packages/global-assets/house-white.png"
import CircleText from "../../../packages/global-assets/circle-text-building-landing.png"
import ArrowPattern from "../../../packages/global-assets/arrow-pattern.png"
import PhoneFlexy from "../../../packages/global-assets/phone-flexy-home.png"
import clsx from "clsx";
 
export default function Page(): JSX.Element {
  return (
    <main className={styles.main}>
      <section className={styles.wrapper}>
       <div className={styles.textWrapper}>
        <h1 className={styles.title}>¡Próximamente!</h1>
        <span className={styles.subtitle}>Podrás vender o arrendar <br/> tu propiedad.</span>
        <Image src={Flexy} alt="logo" className={styles.logo} />
       </div>
       <div className={styles.animationWrapper}> 
        <Image src={VioletShape} alt="violet-shape"  className={clsx(styles.shape, styles.absolute, styles.desktop)} />
        <Image src={VioletShapeMobile} alt="violet-shape"  className={clsx(styles.shape, styles.absolute, styles.mobile)} />
        <Image src={ArrowPattern} alt="arrow-pattern" className={clsx(styles.arrows, styles.absolute)}  />
        <Image src={WhiteHouse} alt="white-house" className={clsx(styles.house, styles.absolute)}  />
        <Image src={VioletSmile} alt="violet-smile"  className={clsx(styles.violetSmile,styles.smiles,styles.smilesLeftTop, styles.absolute)} />
        <Image src={BlueSmile} alt="blue-smile" className={clsx(styles.blueSmile,styles.smiles, styles.smilesLeftTop, styles.absolute)}  />
        <Image src={GreenSmile} alt="green-smile" className={clsx(styles.greenSmile,styles.smiles,styles.smilesLeftTop, styles.absolute)}  />
        <Image src={WhiteSmile} alt="white-smile" className={clsx(styles.whiteSmile,styles.smiles,styles.smilesBottom, styles.absolute)}  />
        <Image src={GreenSmile} alt="green-smile" className={clsx(styles.greenSmile2,styles.smiles,styles.smilesRight,  styles.absolute)}  />
        <Image src={WhiteSmile} alt="white-smile" className={clsx(styles.whiteSmile2,styles.smiles, styles.smilesRight, styles.absolute)}  />
        <Image src={CircleText} alt="circle-text" className={clsx(styles.circleText, styles.absolute)}  />
        <Image src={PhoneFlexy} alt="phone-flexy"  className={clsx(styles.phoneFlexy, styles.absolute)} />
        <div className={styles.containerStroke}> 
          <TextBackground number={8} text="arrienda" animation  className={clsx(styles.textStrokeTop, styles.desktop)}/>
          <TextBackground number={8} text="vende" animation className={clsx(styles.textStrokeBottom, styles.desktop)}/>
          <TextBackground number={4} text="arrienda" animation  className={clsx( styles.mobile)}/>
          <TextBackground number={4} text="vende" animation className={clsx( styles.mobile)}/>
          <TextBackground number={4} text="arrienda" animation  className={clsx( styles.mobile)}/>
          <TextBackground number={4} text="vende" animation className={clsx( styles.mobile)}/>
          <TextBackground number={4} text="arrienda" animation  className={clsx( styles.mobile)}/>
          <TextBackground number={4} text="vende" animation className={clsx( styles.mobile)}/>
        </div>
       </div>
       <Image src={Flexy} alt="logo" className={clsx(styles.logoSmall,styles.mobile)} />
  
      </section>
    </main>
  );
}

type Text = {
  text: string;
  number: number;
  animation: boolean;
} & JSX.IntrinsicElements["div"];

const TextBackground = ({ text, number = 3, animation, className }: Text) => {
  const texts = new Array(number).fill("");

  return (
    <div className={clsx(styles.wrapperTextAnimation, className)}>
      {texts.map((_, i) => (
          <h4 className={styles.textAnimated} key={i}
            style={
              animation
                ? ({
                    "--animation-delay": `${i / 4}s`,
                  } as React.CSSProperties)
                : { animation: "none" }
            }
          >
            {text}
          </h4>
      ))}
    </div>
  );
};

