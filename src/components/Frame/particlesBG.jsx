import { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
// import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
import "pathseg";
import { tsParticles } from "tsparticles-engine";
import { loadPolygonMaskPlugin } from "tsparticles-plugin-polygon-mask";
import codesvg from "./codesvg.svg";

const ParticlesBG = () => {
  (async () => {
    await loadPolygonMaskPlugin(tsParticles);
  })();
  const particlesInit = useCallback(async (engine) => {
    // console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
    // await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    //   await console.log(container);
  }, []);

  const options = {};

  const [theme, setTheme] = useState(true);
  const [moveSc, setMoveSc] = useState(true);

  const detectScroll = () => {
    const particles = document.getElementById("tsparticles");
    const projectsCont = document.getElementById("projectsCont");

    const scrollStart = () => {
      particles.classList.remove("duration-1000");
      particles.classList.add("duration-100");
      particles.classList.add("blur-[1px]");
      particles.classList.remove("blur-none");
      setTimeout(() => {
        // setMoveSc(false);
      }, 100);
    };

    const scrollEnd = () => {
      setTimeout(() => {
        particles.classList.remove("duration-1000");
        particles.classList.add("duration-100");
        particles.classList.add("blur-[1px]");
        // particles.classList.remove("blur-sm");
        setTimeout(() => {
          // particles.classList.add("blur-sm");
          particles.classList.remove("blur-[1px]");

          setTimeout(() => {
            // setMoveSc(true);
            particles.classList.remove("duration-100");
            particles.classList.add("duration-1000");
            particles.classList.remove("blur-[1px]");
            // particles.classList.remove("blur-sm");
            particles.classList.add("blur-none");
            // particles.classList.remove("blur-sm");
          }, 1000);
        }, 100);
      }, 500);
    };

    console.log(projectsCont);
    if (projectsCont) {
      projectsCont.addEventListener("scroll", (event) => {
        // scrollStart();

        console.log("scroll");
      });

      projectsCont.addEventListener("scrollend", () => {
        // scrollEnd();
        // particles.classList.remove("duration-1000");
        // particles.classList.add("duration-100");
        // setTimeout(() => {
        //   particles.classList.add("blur");
        //   particles.classList.remove("blur-sm");
        //   setTimeout(() => {
        //     particles.classList.add("blur-sm");
        //     particles.classList.remove("blur");

        //     setTimeout(() => {
        //       setMoveSc(true);
        //       particles.classList.remove("duration-100");
        //       particles.classList.add("duration-1000");
        //       particles.classList.remove("blur");
        //       // particles.classList.remove("blur-sm");
        //       particles.classList.add("blur-none");
        //       particles.classList.remove("blur-sm");
        //     }, 500);
        //   }, 200);
        // }, 200);
        console.log("scrollend");
      });
    }
  };

  useEffect(() => {
    // console.log(document.getElementById("projectsCont").onscroll(() => {}));
    setInterval(() => {
      setTheme(document.getElementsByTagName("html")[0].className);
    }, 100);
    setTimeout(() => {
      detectScroll();
    }, 2000);
    // console.log(document.getElementById("tsparticles"));
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      className="fixed z-0 w-full h-full p-8 transition-all duration-1000 blur-none"
      options={{
        autoPlay: true,
        background: {
          color: {
            // value: "#000000",

            value: theme === "dark" ? "#000000" : "#ffffff",
          },
          image: "",
          position: "50% 50%",
          repeat: "no-repeat",
          size: "cover",
          opacity: 1,
        },
        backgroundMask: {
          composite: "destination-out",
          cover: {
            color: {
              value: "#fff",
            },
            opacity: 1,
          },
          enable: false,
        },
        defaultThemes: {},
        delay: 0,
        fullScreen: {
          enable: false,
        },
        detectRetina: false,
        // duration: 0,
        fpsLimit: 30,
        interactivity: {
          detectsOn: "canvas",
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            // onDiv: {
            //   selectors: "#repulse-div",
            //   enable: false,
            //   mode: "repulse",
            //   type: "circle",
            // },
            onHover: {
              enable: false,
              mode: "grab",
              parallax: {
                enable: false,
                force: 2,
                smooth: 10,
              },
            },
            resize: false,
          },
          modes: {
            trail: {
              delay: 1,
              pauseOnStop: false,
              quantity: 1,
            },
            attract: {
              distance: 200,
              duration: 0.4,
              easing: "ease-out-quad",
              factor: 1,
              maxSpeed: 50,
              speed: 1,
            },
            bounce: {
              distance: 200,
            },
            bubble: {
              distance: 40,
              duration: 2,
              mix: false,
              opacity: 8,
              size: 6,
            },
            connect: {
              distance: 80,
              links: {
                opacity: 0.5,
              },
              radius: 60,
            },
            grab: {
              distance: 50,
              links: {
                blink: false,
                consent: false,
                opacity: 1,
              },
            },
            push: {
              default: true,
              // groups: {},
              quantity: 1,
            },
            remove: {
              quantity: 2,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
              factor: 100,
              speed: 1,
              maxSpeed: 50,
              easing: "ease-out-quad",
              divs: {
                distance: 200,
                duration: 0.4,
                factor: 100,
                speed: 1,
                maxSpeed: 50,
                easing: "ease-out-quad",
              },
            },
            slow: {
              factor: 1,
              radius: 0,
            },
            light: {
              area: {
                gradient: {
                  start: {
                    value: "#ffffff",
                  },
                  stop: {
                    value: "#000000",
                  },
                },
                radius: 1000,
              },
              shadow: {
                color: {
                  value: "#000000",
                },
                length: 2000,
              },
            },
          },
        },
        // particles: {
        //   color: {
        //     value: "#ef00ff",
        //   },
        //   life: {
        //     duration: {
        //       value: 100,
        //     },
        //   },

        //   move: {
        //     angle: {
        //       offset: 0,
        //       value: 90,
        //     },
        //     attract: {
        //       distance: 200,
        //       enable: false,
        //       rotate: {
        //         x: 600,
        //         y: 1200,
        //       },
        //     },
        //     center: {
        //       x: 50,
        //       y: 50,
        //       mode: "percent",
        //       radius: 0,
        //     },
        //     decay: 0,
        //     direction: "none",
        //     drift: 0,
        //     enable: true,
        //     gravity: {
        //       acceleration: 9.81,
        //       enable: false,
        //       inverse: false,
        //       maxSpeed: 50,
        //     },
        //     path: {
        //       clamp: true,
        //       delay: {
        //         random: {
        //           enable: false,
        //           minimumValue: 0,
        //         },
        //         value: 0,
        //       },
        //       enable: false,
        //       options: {},
        //     },
        //     outModes: {
        //       default: "bounce",
        //       bottom: "bounce",
        //       left: "bounce",
        //       right: "bounce",
        //       top: "bounce",
        //     },
        //     random: false,
        //     size: false,
        //     speed: 1,
        //     spin: {
        //       acceleration: 0,
        //       enable: false,
        //     },
        //     straight: false,
        //     trail: {
        //       enable: false,
        //       length: 10,
        //       fill: {},
        //     },
        //     vibrate: false,
        //     warp: false,
        //   },
        //   links: {
        //     color: "#ff00c3",
        //     distance: 150,
        //     // distance: moveSc ? 150 : 50,
        //     enable: true,
        //     // enable: false,
        //     // enable: moveSc ? true : false,
        //     opacity: 0.25,
        //     width: 1,
        //   },
        //   move: {
        //     direction: "none",
        //     enable: true,
        //     outModes: {
        //       default: "out",
        //     },
        //     random: true,
        //     speed: 0.7,
        //     // speed: moveSc ? 0.7 : 0.2,
        //     straight: false,
        //   },
        //   number: {
        //     density: {
        //       enable: true,
        //       area: 800,
        //     },
        //     value: 100,
        //     // value: moveSc ? 200 : 100,
        //   },
        //   opacity: {
        //     value: 0.5,
        //     // value: moveSc ? 0.5 : 1,
        //   },
        //   shape: {
        //     type: "triangle",
        //   },
        //   size: {
        //     value: { min: 0.5, max: 3 },
        //     // value: { min: moveSc ? 0.5 : 4, max: moveSc ? 3 : 7 },
        //   },
        // },
        particles: {
          bounce: {
            horizontal: {
              random: {
                enable: false,
                minimumValue: 0.1,
              },
              value: 1,
            },
            vertical: {
              random: {
                enable: false,
                minimumValue: 0.1,
              },
              value: 1,
            },
          },
          collisions: {
            absorb: {
              speed: 1,
            },
            bounce: {
              horizontal: {
                random: {
                  enable: false,
                  minimumValue: 0.1,
                },
                value: 1,
              },
              vertical: {
                random: {
                  enable: false,
                  minimumValue: 0.1,
                },
                value: 1,
              },
            },
            enable: true,
            maxSpeed: 0.5,
            mode: "bounce",
            overlap: {
              enable: true,
              retries: 0,
            },
          },
          color: {
            value: "#ef00ff",
            // value: "#ffffff",
            // animation: {
            //   h: {
            //     count: 0,
            //     enable: false,
            //     offset: 0,
            //     speed: 1,
            //     delay: 0,
            //     decay: 0,
            //     sync: true,
            //   },
            //   s: {
            //     count: 0,
            //     enable: false,
            //     offset: 0,
            //     speed: 1,
            //     delay: 0,
            //     decay: 0,
            //     sync: true,
            //   },
            //   l: {
            //     count: 0,
            //     enable: false,
            //     offset: 0,
            //     speed: 1,
            //     delay: 0,
            //     decay: 0,
            //     sync: true,
            //   },
            // },
          },
          move: {
            angle: {
              offset: 0,
              value: 90,
            },
            attract: {
              distance: 200,
              enable: false,
              rotate: {
                x: 600,
                y: 1200,
              },
            },
            center: {
              x: 50,
              y: 50,
              mode: "percent",
              radius: 0,
            },
            decay: 0,
            direction: "none",
            drift: 0,
            enable: true,
            gravity: {
              acceleration: 9.81,
              enable: false,
              inverse: false,
              maxSpeed: 50,
            },
            path: {
              clamp: false,
              delay: {
                random: {
                  enable: false,
                  minimumValue: 0,
                },
                value: 0,
              },
              enable: false,
              options: {},
            },
            outModes: {
              default: "bounce",
              bottom: "bounce",
              left: "bounce",
              right: "bounce",
              top: "bounce",
            },
            random: false,
            size: false,
            speed: 0.5,
            spin: {
              acceleration: 0,
              enable: false,
            },
            straight: false,
            trail: {
              enable: false,
              length: 10,
              fill: {},
            },
            vibrate: false,
            warp: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
              // width: 1920,
              // height: 1080,
            },
            limit: 0,
            value: 90,
          },
          opacity: {
            random: {
              enable: false,
              minimumValue: 0.5,
            },
            value: 0.5,
            animation: {
              count: 0,
              enable: true,
              speed: 2,
              decay: 0,
              delay: 0,
              sync: false,
              mode: "auto",
              startValue: "random",
              destroy: "none",
              minimumValue: 0.5,
            },
          },
          reduceDuplicates: false,
          shadow: {
            blur: 0,
            color: {
              value: "#000",
            },
            enable: false,
            offset: {
              x: 0,
              y: 0,
            },
          },
          shape: {
            loadShape: {},
            close: true,
            fill: true,
            options: {},
            type: "circle",
          },
          size: {
            random: {
              enable: true,
              minimumValue: 1,
            },
            value: { min: 0.5, max: 2.5 },
            animation: {
              count: 0,
              enable: false,
              speed: 40,
              decay: 0,
              delay: 0,
              sync: false,
              mode: "auto",
              startValue: "random",
              destroy: "none",
              minimumValue: 0.1,
            },
          },
          stroke: {
            width: 0,
          },
          destroy: {
            bounds: {},
            mode: "none",
            split: {
              count: 1,
              factor: {
                random: {
                  enable: false,
                  minimumValue: 0,
                },
                value: 3,
              },
              rate: {
                random: {
                  enable: false,
                  minimumValue: 0,
                },
                value: {
                  min: 4,
                  max: 9,
                },
              },
              sizeOffset: true,
            },
          },
          roll: {
            darken: {
              enable: false,
              value: 0,
            },
            enable: false,
            enlighten: {
              enable: false,
              value: 0,
            },
            mode: "vertical",
            speed: 25,
          },
          tilt: {
            random: {
              enable: false,
              minimumValue: 0,
            },
            value: 0,
            animation: {
              enable: false,
              speed: 0,
              decay: 0,
              sync: false,
            },
            direction: "clockwise",
            enable: false,
          },
          twinkle: {
            lines: {
              enable: false,
              frequency: 0.05,
              opacity: 1,
            },
            particles: {
              enable: false,
              frequency: 0.05,
              opacity: 1,
            },
          },
          wobble: {
            distance: 5,
            enable: false,
            speed: {
              angle: 50,
              move: 10,
            },
          },
          life: {
            count: 0,
            delay: {
              random: {
                enable: false,
                minimumValue: 0,
              },
              value: 0,
              sync: false,
            },
            duration: {
              random: {
                enable: false,
                minimumValue: 0.0001,
              },
              value: 0,
              sync: false,
            },
          },
          rotate: {
            random: {
              enable: false,
              minimumValue: 0,
            },
            value: 0,
            animation: {
              enable: false,
              speed: 0,
              decay: 0,
              sync: false,
            },
            direction: "clockwise",
            path: false,
          },
          orbit: {
            animation: {
              count: 0,
              enable: false,
              speed: 2,
              decay: 0,
              delay: 0,
              sync: false,
            },
            enable: false,
            opacity: 1,
            rotation: {
              random: {
                enable: false,
                minimumValue: 0,
              },
              value: 45,
            },
            width: 1,
          },
          links: {
            blink: false,
            color: {
              value: "#ff00c3",
            },
            consent: false,
            distance: 150,
            enable: true,
            frequency: 1,
            opacity: 0.4,
            shadow: {
              blur: 5,
              color: {
                value: "#000",
              },
              enable: false,
            },
            triangles: {
              enable: false,
              frequency: 1,
            },
            width: 2,
            warp: false,
          },
          repulse: {
            random: {
              enable: false,
              minimumValue: 0,
            },
            value: 0,
            enabled: false,
            distance: 1,
            duration: 1,
            // factor: 1,
            speed: 1,
          },
        },
        pauseOnBlur: false,
        pauseOnOutsideViewport: false,
        smooth: false,
        style: {},
        // zLayers: 100,
        motion: {
          disable: false,
          reduce: {
            factor: 4,
            value: false,
          },
        },
        // polygon: {
        //   draw: {
        //     enable: false,
        //     stroke: {
        //       color: {
        //         value: "rgba(255,255,255,1)",
        //       },
        //       width: 0.5,
        //       opacity: 0,
        //     },
        //   },
        //   enable: false,
        //   inline: {
        //     arrangement: "equidistant",
        //   },
        //   move: {
        //     radius: 5,
        //     type: "path",
        //   },
        //   scale: 0.75,
        //   type: "inline",
        //   // url: "url('./svgviewer.svg')",
        //   url: codesvg,
        //   // url: "https://svgur.com/i/x5o.svg",
        //   // url: "https://svgur.com/i/x3k.svg",
        //   // url: "./codesvg.svg",
        //   // url: "./src/components/frame/codesvg.svg",
        //   // url: "https://particles.js.org/images/smalldeer.svg",
        // },
      }}
    />
  );
};

export default ParticlesBG;
