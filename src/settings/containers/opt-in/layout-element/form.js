import React, { Component } from 'react';

import Input from '../../../components/input';
import Button from '../../../components/button';
import Checkbox from '../../../components/checkbox';

export default class LayoutForm extends Component {
	render() {
		let extraClass = '';
		let fieldsIcon = 'none';
		let fieldsProximity = ' hustle-proximity-joined';
		let gdprLabel = '';
		let renderGdpr = '';

		if ( this.props.fieldsInline && 'true' === this.props.fieldsInline ) {
			extraClass = ' hustle-form-inline';
		}

		if (
			'static' === this.props.icon ||
			'animated' === this.props.icon
		) {
			fieldsIcon = this.props.icon;
		}

		if ( 'joined' === this.props.proximity ) {
			fieldsProximity = ' hustle-proximity-' + this.props.proximity;
		}

		if ( 'separated' === this.props.proximity ) {
			fieldsProximity = ' hustle-proximity-' + this.props.proximity;
		}

		if ( this.props.fieldsGdpr && '' !== this.props.fieldsGdpr ) {
			gdprLabel = this.props.fieldsGdpr;
			renderGdpr = (
				<Checkbox
					property={ `hustle-module-${ this.props.moduleId }-gdpr` }
					extraClass="hustle-gdpr"
					label={ gdprLabel }
				/>
			);
		}

		const formFields = React.Children.map( this.props.children, child => {
			return child;
		});

		return (
			<form className="hustle-layout-form">

				<div className={ `hustle-form${ extraClass }` }>

					<div className={ `hustle-form-fields${ fieldsProximity }` }>

						{ formFields }

						<Input
							type="email"
							icon={ fieldsIcon }
							label="johnsmith@email.com"
							property={ `hustle-module-${ this.props.moduleId }-field-email` }
						/>

						<Button label="Submit" />

					</div>

				</div>

				{ renderGdpr }

			</form>
		);
	}
}
