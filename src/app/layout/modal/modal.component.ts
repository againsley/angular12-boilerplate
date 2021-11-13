import { Component, OnInit } from '@angular/core';
import { ElementRef } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'app-modal',
  host: {
		"(click)": "handleClick( $event )"
	},
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  private elementRef: ElementRef;
	private router: Router;

  constructor(
    elementRef: ElementRef,
		router: Router
  ) { 
    this.elementRef = elementRef;
    this.router = router;
  }

  ngOnInit(): void {
  }

  // I close the modal window view.
	public closeModal() : void {

		this.router.navigate(
			[
				"/",
				{
					outlets: {
						modal: null
					}
				}
			]
		);

	}

	
	// I handle a click on the modal-view.
	public handleClick( event: MouseEvent ) : void {
		// If the user clicked directly on the modal backdrop, let's treat that as a
		// desire to close the modal window - empty the auxiliary route.
		if ( event.target === this.elementRef.nativeElement ) {

			this.closeModal();

		}

	}

}
