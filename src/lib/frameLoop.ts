/* Un único listener de scroll/resize para todo el sitio.
   Cada frame ejecuta primero todas las lecturas de layout y después todas las
   escrituras, para no forzar recálculos de layout entre elementos. */

export interface FrameJob {
  read: () => void
  write: () => void
}

const jobs = new Set<FrameJob>()
let scheduled = false

function flush() {
  scheduled = false
  jobs.forEach((job) => job.read())
  jobs.forEach((job) => job.write())
}

function schedule() {
  if (scheduled) return
  scheduled = true
  requestAnimationFrame(flush)
}

export function subscribeFrame(job: FrameJob) {
  if (jobs.size === 0) {
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule, { passive: true })
  }
  jobs.add(job)
  schedule()

  return () => {
    jobs.delete(job)
    if (jobs.size === 0) {
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
  }
}
