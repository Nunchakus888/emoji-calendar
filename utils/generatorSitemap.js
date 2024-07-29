const fs = require('fs-extra')
const xml = require('xml')

// import * as dfs from "date-fns";
// import * as locales from "date-fns/locale";
const dfs = require('date-fns')
const locales = require('date-fns/locale')


// https://www.sitemaps.org/protocol.html

class SitemapWriter {
	constructor({ outFile }) {
		this.outFile = outFile
        this.langs = ['', ...Object.keys(locales).map((k) => `${locales[k].code}`)];
        this.date = dfs.format(Date.now(), 'yyyy-MM-dd');
        this.writeSitemap();
	}

	async writeSitemap() {
		// Construct the XML object
		const xmlObject = {
			urlset: [
				// <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
				{
					_attr: {
						xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9',
					},
				},

				// For every page of the site, generate a <url> object
				...this.langs.map((lang) => {
					return {
						// <url>
						url: [
							// <loc>http://www.example.com/</loc>
							{ loc: `https://www.x-calendar.com/${lang}` },

							// <lastmod>2005-01-01</lastmod>
							{ lastmod: this.date },

							// <changefreq>monthly</changefreq>
							{ changefreq: 'daily' },

							// <priority>0.8</priority>
							{ priority: 1 },
						],
					}
				}),
			],
		}

		// Generate the XML markup
		const xmlString = xml(xmlObject, true)

		// Write the file to disk
		await fs.writeFile(this.outFile, '<?xml version="1.0" encoding="UTF-8"?>' + xmlString)
	}
}

new SitemapWriter({ outFile: 'public/sitemap.xml' });