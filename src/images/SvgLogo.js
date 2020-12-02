import * as React from 'react';
import styles from './SvgLogo.module.css';

function SvgLogo(props) {
  return (
    <div className={styles.logoContainer}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.width}
        height={props.height}
        viewBox="0 0 196 91"
        {...props}
      >
        <path
          d="M1.008 1.137V79.94h72.741v-3.03H4.039V4.167h187.915V76.91h-69.71v3.031h72.74V1.137H1.008m65.871 24.247v20.408h4.243c0-2.656-.795-6.863.358-9.295 1.053-2.22 4.135-2.78 5.557-.605 1.497 2.29.551 7.243.551 9.9h4.243c0-5.056 1.727-13.985-5.253-14.894a7.437 7.437 0 00-2.425.105c-1.166.233-2.093.738-3.03 1.453v-7.072h-4.244m71.327 1.097c-1.811.26-3.54.76-5.052 1.821-4.652 3.267-5.342 10.524-1.379 14.643 2.285 2.375 6.033 3.425 9.26 2.963 1.734-.249 3.395-.734 4.849-1.74 8.805-6.096 2.323-19.12-7.678-17.687m-17.983.116v19.195h4.445V26.597h-4.445m18.387 3.697c7.695-1.109 9.728 10.69 2.02 11.8-7.722 1.114-9.733-10.688-2.02-11.8m-87.694 2.364v-1.616h-4.04v20.004h4.242v-6.668c1.198.913 2.51 1.546 4.042 1.608a8.334 8.334 0 003.435-.617c8.085-3.324 3.66-16.207-4.85-14.324-1.144.253-1.975.834-2.829 1.613m52.94 8.891l-1.213 3.03c3.218 1.249 6.733 2.029 10.103.79 2.245-.824 3.795-3.252 2.827-5.639-1.426-3.518-5.798-1.568-8.015-3.577-1.05-.95.495-1.86 1.35-2.014 1.764-.318 3.511.36 5.05 1.146l1.415-3.233c-2.99-1.153-6.423-1.807-9.497-.512-2.301.97-3.784 3.806-2.406 6.167 1.684 2.886 5.43 1.268 7.629 2.979 1.167.908-.217 1.904-1.181 2.037-2.198.304-3.992-.818-6.062-1.174M84.458 31.042c1.348 3.475 2.912 6.882 4.389 10.305.52 1.206 1.822 3.118 1.724 4.445-.202 2.728-3.2 1.64-4.698 1.213l-1.415 3.03c2.75 1.6 6.417 1.786 8.646-.809 1.463-1.703 2.168-4.223 3.043-6.263 1.703-3.967 3.443-7.928 5.082-11.921h-4.243l-4.041 9.9-2.831-6.87-1.352-2.822-4.304-.208m-30.107 3.297c4.985-.613 5.69 7.557.809 8.156-4.975.612-5.68-7.558-.809-8.156m32.734 35.296c-4.367 0-4.243 2.09-4.243 5.86-.83 0-1.895-.152-2.54.492-.875.876-.851 4.25.161 5.016.648.49 1.616.352 2.379.352 0 3.77-.124 5.86 4.243 5.86.058 2.74 4.146 4.233 5.974 1.998 1.295-1.583.492-5.884.492-7.858h8.89c0 1.98-.79 6.167.406 7.813 1.722 2.37 6.002.76 6.06-1.954 4.367 0 4.243-2.09 4.243-5.86.763 0 1.731.138 2.38-.351 1.011-.765 1.035-4.14.16-5.016-.645-.644-1.71-.492-2.54-.492 0-3.77.124-5.86-4.243-5.86-.058-2.713-4.338-4.324-6.06-1.954-1.196 1.647-.406 5.833-.406 7.814h-8.89c0-1.953.807-6.3-.492-7.854-1.855-2.219-5.915-.758-5.974 1.994m2.05-1.292c.634-.277 2.513-.352 2.88.37.513 1.011.121 3.034.121 4.155v10.507c0 1.007.545 4.587-.468 5.104-.725.37-2.674.367-3.047-.486-.505-1.156-.122-3.166-.122-4.416V73.272c0-1.086-.557-4.408.636-4.93m15.357-.034c.756-.244 2.504-.31 2.879.549.505 1.156.122 3.165.122 4.415v10.305c0 1.149.599 4.598-.82 4.987-.649.178-2.334.286-2.695-.427-.514-1.012-.122-3.034-.122-4.156V73.474c0-1.053-.576-4.773.636-5.166M87.085 71.05V85.8c-.825 0-2.078.215-2.679-.492-.628-.738-.355-2.246-.352-3.145.008-2.425.018-4.85 0-7.275-.006-.92-.261-2.37.238-3.186.543-.888 1.91-.652 2.793-.652m21.822 14.75V71.05c.825 0 2.078-.215 2.68.491.627.739.354 2.246.35 3.146-.007 2.424-.017 4.85 0 7.275.007.92.262 2.369-.237 3.186-.543.887-1.91.652-2.793.652m-27.682-5.86v-3.03c2.242.026 2.242 3.004 0 3.03m12.794-2.909c.586-.288 1.524-.122 2.159-.122 1.688 0 4.008-.416 5.627.065.831.246.946 2.256.312 2.758-.459.364-1.354.208-1.898.208-1.637 0-4.728.602-6.2-.122-.72-.354-.72-2.433 0-2.787m20.748-.122v3.031c-2.242-.027-2.242-3.004 0-3.03z"
          fill="currentColor"
          color={styles.logoColor}
        />
      </svg>
    </div>
  );
}

export default SvgLogo;
