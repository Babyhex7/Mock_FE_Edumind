# Panduan Deployment ke Vercel

## Persiapan

Project Next.js ini sudah siap untuk di-deploy ke Vercel dengan konfigurasi:

- ✅ Package.json dengan build scripts
- ✅ Next.js 16.1.6
- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ .gitignore yang proper
- ✅ vercel.json

## Cara Deploy

### Opsi 1: Deploy via Vercel Dashboard (Recommended)

1. **Push code ke Git repository**

   ```bash
   cd emotion-chatbot-ui
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Login ke Vercel**
   - Kunjungi [vercel.com](https://vercel.com)
   - Login dengan GitHub/GitLab/Bitbucket

3. **Import Project**
   - Klik "Add New Project"
   - Pilih repository: `Mock_FE_Edumind`
   - Select directory: `emotion-chatbot-ui`

4. **Configure Project**
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `emotion-chatbot-ui`
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `.next` (auto-detected)
   - Install Command: `npm install` (auto-detected)

5. **Environment Variables** (jika ada)
   - Tambahkan environment variables jika diperlukan
   - Contoh: `NEXT_PUBLIC_API_URL`, `API_KEY`, dll

6. **Deploy**
   - Klik "Deploy"
   - Tunggu proses build selesai (±2-5 menit)
   - Project akan live di URL: `https://your-project.vercel.app`

### Opsi 2: Deploy via Vercel CLI

1. **Install Vercel CLI**

   ```bash
   npm i -g vercel
   ```

2. **Login**

   ```bash
   vercel login
   ```

3. **Deploy**

   ```bash
   cd emotion-chatbot-ui
   vercel
   ```

4. **Deploy Production**
   ```bash
   vercel --prod
   ```

## Auto-Deploy

Setelah setup awal, setiap push ke branch `main` akan otomatis trigger deployment baru:

- Push ke `main` → Production deployment
- Push ke branch lain → Preview deployment

## Custom Domain (Optional)

1. Di Vercel Dashboard → Project Settings
2. Pilih tab "Domains"
3. Tambahkan custom domain
4. Update DNS settings sesuai instruksi Vercel

## Monitoring

- Access logs: Vercel Dashboard → Project → Deployments
- Analytics: Vercel Dashboard → Project → Analytics
- Performance: Automatic monitoring oleh Vercel

## Troubleshooting

### Build Error

- Cek logs di Vercel Dashboard
- Pastikan `npm run build` berjalan sukses di local
- Cek environment variables

### Module Not Found

- Pastikan semua dependencies ada di `package.json`
- Bukan di `devDependencies` jika digunakan di runtime

### Environment Variables

- Set di Vercel Dashboard → Project Settings → Environment Variables
- Redeploy setelah menambah/mengubah env vars

## Preview URL

Setelah deployment, Anda akan mendapat:

- **Production URL**: `https://your-project.vercel.app`
- **Preview URL**: `https://your-project-git-branch.vercel.app` (untuk setiap branch)

---

**Note**: Vercel secara otomatis optimize Next.js deployment dengan:

- Edge caching
- Image optimization
- Automatic HTTPS
- Global CDN
