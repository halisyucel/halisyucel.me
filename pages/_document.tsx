import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}
	render() {
		return (
			<Html lang={'tr'}>
				<Head>
					<link rel={'preconnect'} href={'https://fonts.googleapis.com'} />
					<link
						rel={'preconnect'}
						href={'https://fonts.gstatic.com'}
						crossOrigin={'anonymous'}
					/>
					<link
						rel={'stylesheet'}
						href={
							'https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Signika:wght@300;400;500;600;700&display=swap'
						}
					/>
				</Head>
				<body
					className={
						'bg-black w-full text-white mt-20 pt-20 flex justify-center items-start'
					}
				>
					<Main />
					<NextScript />
					<script
						src={'https://www.google.com/recaptcha/api.js?render=explicit&hl=tr'}
						async
						defer
					/>
				</body>
			</Html>
		);
	}
}

export default MyDocument;
