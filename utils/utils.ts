export function getInstagramCode(url: string) {
  // Check if the URL is an Instagram URL
  if (!url.startsWith('https://www.instagram.com/')) {
    return null;
  }
  // Get the pathname of the URL
  const pathname = new URL(url).pathname;
  // Split the pathname into an array by '/'
  const pathnameParts = pathname.split('/');
  // The shortcode is the second element in the array
  const shortcode = pathnameParts[2];
  // Return the shortcode
  return shortcode;
}

export function abbreviate(str: string) {
  if (!str) {
    return null;
  }
  if (str.length <= 10) {
    return str;
  }
  return str.substring(0, 5) + '•••' + str.substring(str.length - 5);
}

export function expired(time: number) {
  return time + 86400 < Math.floor(Date.now() / 1000);
}
