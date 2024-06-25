import styles from "./page.module.css";
import clsx from "clsx";
 
export default function Page(): JSX.Element {
  return (
    <main className={styles.main}>
      <section className={styles.wrapper}>
       <div className={styles.textWrapper}>
        <h1 className={styles.title}>¡Próximamente!</h1>
        <span className={styles.subtitle}>Podrás vender o arrendar <br/> tu propiedad.</span>
        <img src="/flexy.png" alt="logo" className={styles.logo} />
       </div>
       <div className={styles.animationWrapper}> 
        <img src="/violet-shape.png" alt="violet-shape" className={clsx(styles.shape, styles.absolute, styles.desktop)} />
        <img src="/violet-shape-mobile.png" alt="violet-shape"  className={clsx(styles.shape, styles.absolute, styles.mobile)} />
        <img src="/arrow-pattern.png" alt="arrow-pattern"  className={clsx(styles.arrows, styles.absolute)}  />
        <img src="/house.png" alt="white-house"  className={clsx(styles.house, styles.absolute)}  />
        <img src="/violet-smile.png" alt="violet-smile"  className={clsx(styles.violetSmile,styles.smiles,styles.smilesLeftTop, styles.absolute)} />
        <img src="/blue-smile.png" alt="blue-smile"  className={clsx(styles.blueSmile,styles.smiles, styles.smilesLeftTop, styles.absolute)}  />
        <img src="/green-smile.png" alt="green-smile"  className={clsx(styles.greenSmile,styles.smiles,styles.smilesLeftTop, styles.absolute)}  />
        <img src="/white-smile.png" alt="white-smile"  className={clsx(styles.whiteSmile,styles.smiles,styles.smilesBottom, styles.absolute)}  />
        <img src="/green-smile.png" alt="green-smile"  className={clsx(styles.greenSmile2,styles.smiles,styles.smilesRight,  styles.absolute)}  />
        <img src="/white-smile.png" alt="white-smile"  className={clsx(styles.whiteSmile2,styles.smiles, styles.smilesRight, styles.absolute)}  />
        <img src="/circle-text-building-landing.png" alt="circle-text"  className={clsx(styles.circleText, styles.absolute)}  />
        <img src="/phone-flexy-home.png" alt="phone-flexy"  className={clsx(styles.phoneFlexy, styles.absolute)} />
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
       <img src="/flexy.png" alt="logo"  className={clsx(styles.logoSmall,styles.mobile)} />
  
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

