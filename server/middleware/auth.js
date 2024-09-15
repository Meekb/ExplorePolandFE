export default defineEventHandler((event) => {
    const authHeader = getHeader(event, 'authorization')
    // debugging console.log('New request: ' + getRequestURL(event))

    if (getRequestURL(event).pathname === '/login') {
        return
    }

    if (!authHeader) {
        return sendRedirect(event, '/login')
    }
})
