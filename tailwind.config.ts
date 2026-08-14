import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		/* Archivo (Omnibus-Type, Buenos Aires) auto-alojada con next/font.
  		 * Ver el porqué de la elección en el contrato de dirección del layout. */
  		fontFamily: {
  			sans: ['var(--font-archivo)', 'system-ui', 'sans-serif'],
  			display: ['var(--font-archivo)', 'system-ui', 'sans-serif'],
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',

  			/* ------------------------------------------------------------------
  			 * SISTEMA DE MARCA — "catálogo de repuestos" (14/08/2026)
  			 *
  			 * Dos tintas sobre papel técnico, como un manual de mantenimiento
  			 * impreso barato: `tinta` (estructura) y `maquina` (la tinta de
  			 * trabajo, el naranja de compresor y de máquina industrial).
  			 *
  			 * Los contrastes de abajo están MEDIDOS, no estimados. La regla que
  			 * no se negocia: **sobre naranja va texto tinta, nunca blanco.**
  			 * Blanco sobre `maquina-500` da 3,75:1 y AA pide 4,5:1; tinta sobre
  			 * el mismo naranja da 4,85:1. Negro sobre naranja además es lo que
  			 * hace la señalética industrial de verdad.
  			 * ---------------------------------------------------------------- */

  			/* Papel técnico frío. NO es crema ni pergamino: el mundo es imprenta
  			 * industrial, no papelería artesanal. */
  			papel: {
  				DEFAULT: '#F7F8F8',  // fondo base   — tinta encima: 17,0:1
  				alt:     '#EDEFEF',  // franja alterna para dar ritmo sin cajas
  				linea:   '#D8DCDC',  // filete divisor de tabla
  			},

  			/* Tinta negra de estructura. */
  			tinta: {
  				DEFAULT: '#141719',  // texto y titulares — sobre papel: 17,0:1
  				70:      '#4A5054',  // texto secundario — sobre papel:  7,6:1  ✅
  				50:      '#767C80',  // SOLO texto grande o elementos no textuales
  				                     //   sobre papel da 4,0:1 — no usar en cuerpo
  				20:      '#C9CED1',  // filetes sobre fondo oscuro
  			},

  			/* La tinta de trabajo. Inunda regiones enteras, no salpica de a poco. */
  			maquina: {
  				400: '#FF7A3D',  // solo sobre tinta (fondos oscuros): 7,0:1
  				500: '#E8500F',  // el naranja de la marca — texto tinta encima: 4,85:1
  				600: '#C43F08',  // hover de superficies
  				700: '#8F2D05',  // naranja como TEXTO sobre papel: 6,6:1  ✅
  			},

  			primary: {
  				'50': '#E8F0F5',
  				'100': '#D1E1EB',
  				'200': '#A3C3D7',
  				'300': '#75A5C3',
  				'400': '#4787AF',
  				'500': '#18415A',
  				'600': '#133448',
  				'700': '#0E2736',
  				'800': '#0A1A24',
  				'900': '#050D12',
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
