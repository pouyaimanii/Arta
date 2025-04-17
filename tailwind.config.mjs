import themes from 'daisyui/theme/object';
// const { themes: defaultThemes, extendThemes } = require("daisyui");

// const mytheme = extendThemes({
//   "primary": "#0D9488",
//   "primary-content": "#ffffff",
//   "secondary": "#64748B",
//   "accent": "#F59E0B",
//   "neutral": "#1E293B",
//   "base-100": "#F3F4F6",
//   "info": "#3ABFF8",
//   "success": "#36D399",
//   "warning": "#FBBD23",
//   "error": "#F87272",
// });



/** @type {import('tailwindcss').Config} */
export default {
    // darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: [
  				'IRANSansX',
  				'sans-serif'
  			]
  		},
  		fontSize: {
  			'text-header': '17.96px'
  		},
  		fontWeight: {
  			'font-medium': 600
  		},
  		lineHeight: {
  			'line-tight': '1.0'
  		},
  		letterSpacing: {
  			'tracking-tight': '0%'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		// colors: {
  		// 	background: 'hsl(var(--background))',
  		// 	foreground: 'hsl(var(--foreground))',
  		// 	card: {
  		// 		DEFAULT: 'hsl(var(--card))',
  		// 		foreground: 'hsl(var(--card-foreground))'
  		// 	},
  		// 	popover: {
  		// 		DEFAULT: 'hsl(var(--popover))',
  		// 		foreground: 'hsl(var(--popover-foreground))'
  		// 	},
  		// 	primary: {
  		// 		DEFAULT: 'hsl(var(--primary))',
  		// 		foreground: 'hsl(var(--primary-foreground))'
  		// 	},
  		// 	secondary: {
  		// 		DEFAULT: 'hsl(var(--secondary))',
  		// 		foreground: 'hsl(var(--secondary-foreground))'
  		// 	},
  		// 	muted: {
  		// 		DEFAULT: 'hsl(var(--muted))',
  		// 		foreground: 'hsl(var(--muted-foreground))'
  		// 	},
  		// 	accent: {
  		// 		DEFAULT: 'hsl(var(--accent))',
  		// 		foreground: 'hsl(var(--accent-foreground))'
  		// 	},
  		// 	destructive: {
  		// 		DEFAULT: 'hsl(var(--destructive))',
  		// 		foreground: 'hsl(var(--destructive-foreground))'
  		// 	},
  		// 	border: 'hsl(var(--border))',
  		// 	input: 'hsl(var(--input))',
  		// 	ring: 'hsl(var(--ring))',
  		// 	chart: {
  		// 		'1': 'hsl(var(--chart-1))',
  		// 		'2': 'hsl(var(--chart-2))',
  		// 		'3': 'hsl(var(--chart-3))',
  		// 		'4': 'hsl(var(--chart-4))',
  		// 		'5': 'hsl(var(--chart-5))'
  		// 	}
  		// }
  	}
  },
  plugins: [require("daisyui"), require("tailwindcss-animate")],
  // daisyui: {
  //   themes: [
  //     {
  //       mytheme: {
  //         primary: "#F04248",
  //         "secondary": "#5F5F5F",

  //       }
        
  //     },
  //     "mytheme" // ← این خط مهمه!

  //   ]
  // }
  // daisyui: {
  //   themes: [
  //     {
  //       mytheme: {
  //         "primary": "#F04248", // رنگ دلخواه
  //         "secondary": "#5F5F5F", // رنگ دلخواه
  //         // بقیه رنگ‌ها...
  //       }
  //     }
  //   ]
  // }
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#FFFFFF",
          "secondary": "#64748B",
          "accent": "#F59E0B",
          "neutral": "#1E293B",
          "base-100": "#F3F4F6",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
        // mytheme: mytheme,
      },
      
    ],
  },
  
};
