import { ComponentFixture, TestBed } from '@angular/core/testing';
import { count } from '../../utils/test-utils';
import { MobileStepperModule } from './mobile-stepper.module';
import { Component } from '@angular/core';

@Component({
    template: ` <blui-mobile-stepper [steps]="4" [activeStep]="0"></blui-mobile-stepper> `,
})
class TestMobileStepperDot {}

@Component({
    template: ` <blui-mobile-stepper [steps]="4" [activeStep]="0" variant="progress"></blui-mobile-stepper> `,
})
class TestMobileStepperProgress {}

describe('DotStepperComponent', () => {
    let component: TestMobileStepperDot;
    let fixture: ComponentFixture<TestMobileStepperDot>;

    beforeEach(() => {
        void TestBed.configureTestingModule({
            declarations: [TestMobileStepperDot, TestMobileStepperProgress],
            imports: [MobileStepperModule],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestMobileStepperDot);
        component = fixture.componentInstance;
    });

    it('should initialize', () => {
        fixture.detectChanges();
        void expect(component).toBeTruthy();
    });

    it('should render the correct number of steps', () => {
        fixture.detectChanges();
        const dots = fixture.nativeElement.querySelectorAll('.blui-mobile-stepper-dot');
        void expect(dots.length).toBe(4);
    });

    it('should render progress indicator', () => {
        const progressFixture = TestBed.createComponent(TestMobileStepperProgress);
        progressFixture.detectChanges();
        const progressBar = progressFixture.nativeElement.querySelectorAll('.mat-progress-bar');
        void expect(progressBar.length).toBe(1);
    });

    it('should enforce class naming conventions', () => {
        fixture.detectChanges();
        const classList = [
            '.blui-mobile-stepper',
            '.blui-mobile-stepper-content',
            '.blui-mobile-stepper-dots',
            '.blui-mobile-stepper-dot-active',
            '.blui-mobile-stepper-next-button-wrapper',
            '.blui-mobile-stepper-back-button-wrapper',
        ];
        for (const className of classList) {
            count(fixture, className);
        }
        count(fixture, '.blui-mobile-stepper-dot', 4);
        count(fixture, '.blui-mobile-stepper-dot-visited', 0);
        count(fixture, '.blui-mobile-stepper-dot-unvisited', 3);
    });
});
