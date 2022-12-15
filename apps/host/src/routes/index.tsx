import { component$, useSignal } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import ComponentLoader from '~/components/component-loader/ComponentLoader';
import RemoteSsr from '~/components/remote-ssr';
import { remotes } from '../../../../libs/shared/remotes';

export default component$(() => {
	const myBool = useSignal<boolean>(false);

	return (
		<>
			<button style="background-color: green;" onClick$={() => (myBool.value = !myBool.value)}>click me</button>
			<main>
				<RemoteSsr remote={remotes.menu} />
				<RemoteSsr remote={remotes.cart} />
				<RemoteSsr remote={remotes.hero} />
				<RemoteSsr remote={remotes.product} />
				<ComponentLoader remote={remotes.reviews} />
			</main>
			<div style="position: fixed; top: 0; right: 0; background-color: red;">
				<p>{`>>> ${myBool.value} <<<`}</p>
			</div>
		</>
	);
});

export const head: DocumentHead = {
	title: 'Qwik dream Demo',
};
