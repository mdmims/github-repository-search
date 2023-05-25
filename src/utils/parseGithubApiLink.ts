interface KeyValueMap<T> {
  [key: string]: T;
}

export function parseLinkHeader(header: string): KeyValueMap<string> {
  if (header === '') {
    return {};
  }

  let parts: string[];
  let links: KeyValueMap<string> = {};

  if (header.length === 0) {
    throw new Error('input must not be of zero length');
  }

  parts = header.split(',');
  // Parse each part into a named link
  parts.forEach(part => {
    const section: string[] = part.split(';');
    let url: string;
    let name: string;

    if (section.length !== 2) {
      throw new Error('section could not be split on \';\'');
    }
    url         = section[0].replace(/<(.*)>/, '$1').trim();
    name        = section[1].replace(/rel="(.*)"/, '$1').trim();
    links[name] = url;
  });

  return links;
}