import Layout from "../components/layout";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";

export default function Index() {
	return (
		<>
			<Layout>
				<Head>
					<title>Emily's personal {CMS_NAME}</title>
				</Head>
			</Layout>
		</>
	);
}
