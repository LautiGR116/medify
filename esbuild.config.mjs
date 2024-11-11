import esbuild from 'esbuild';
import fs from 'fs/promises';

esbuild.build({
  entryPoints: ['src/index.tsx'], // Ajusta esto según tu punto de entrada
  bundle: true,
  outfile: 'dist/out.js', // Ajusta esto según tu salida deseada
  loader: {
    '.js': 'jsx',
  },
  define: {
    'import.meta.env.MODE': '"production"',
  },
  plugins: [
    {
      name: 'fix-react-native',
      setup(build) {
        build.onLoad({ filter: /react-native\/index\.js$/ }, async (args) => {
          let contents = await fs.readFile(args.path, 'utf8');
          contents = contents.replace(/import typeof/g, 'import');
          return { contents, loader: 'jsx' };
        });
      },
    },
  ],
}).catch(() => process.exit(1));