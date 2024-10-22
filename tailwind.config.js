/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F3F4F6',
        secondary: '#0771BA',
        _nut: "#F9FAFB",
        _button: "#0771BA",
        _white: "#FFFFFF",
        text_gray: "#D1D5DB",
        bg_selected: "#06284B",
        text_color: "#111827",
        text_sidebar: "#9CA3AF",
        bg_green:"#16A34A",
        text_gray_6b:"#6B7280",
        bg_slate:"#374151",
        bg_lightSlate: "#D1D5DB",
        bg_yellow:"#FEF3C7",
        dark: '#041E41',
      },
      margin: {
        mt_4px:'4px',
        mt_primary: '6px',
        mb_primary: '6px',
        mt_8px: '8px',
        mt_medium: '12px',
        mt_16px: '16px',
        mt_large: '20px',
        ml_secondary: '40px',
        mr_secondary: '40px',
        mt_secondary: '40px',
        mb_secondary: '40px',
        mt_24px: '24px',
      },
      gap: {
        gap_6px: '6px',
        gap_8px: '8px',
        gap_primary: '12px'
      },
      fontSize: {
        text_12px: '12px',
        text_sm: '14px',
        text_sm2: '15px',
        text_md: '16px',
        text_18px: '18px',
        text_lg: '20px',
        text_xl: '24px',
        text_30px: '30px',
        text_xxl: '34px',
        text_40px: '40px',
        text_xxxl: '50px',
      },
      padding: {
        pl_3px: '3px',
        pr_3px: '3px',
        pt_3px: '3px',
        pb_3px: '3px',
        p_4px: '4px',
        pl_primary: '6px',
        pr_primary: '6px',
        pt_primary: '6px',
        pt_8px: '8px',
        pl_10px: '10px',
        pr_10px: '10px',
        pt_10px: '10px',
        pb_10px: '10px',
        p_12px: '12px',
        pl_16px: '16px',
        pr_16px: '16px',
        pt_16px: '16px',
        pb_16px: '16px',
        pl_primary2: '18px',
        pr_primary2: '18px',
        pt_primary2: '18px',
        pb_primary2: '18px',
        pl_secondary: '20px',
        pr_secondary: '20px',
        pt_secondary: '20px',
        pb_secondary: '20px',
        p_28px: '28px',
        
      },
      borderRadius: {
        rounded_primary: '6px',
        rounded_secondary: '10px',
        rounded_4px: '4px',

      },
      height: {
        primary: '40px',
        h_secondary: '192px'
        
      },
     
    },
  },
plugins: [require('daisyui'),],
}

