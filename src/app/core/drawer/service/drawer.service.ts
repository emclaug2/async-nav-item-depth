import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { DrawerLayoutVariantType } from '../..';

/** This service is used to manage the state of a Drawer component, responds to user behavior and input settings. */
@Injectable({
    providedIn: 'root',
})
export class DrawerService {
    private drawerOpen: boolean;
    private disableActiveItemParentStyles: boolean;
    private variant: DrawerLayoutVariantType;
    private navItemCount = 0;
    private tempOpen = false;
    private isCondensed: boolean;
    private sideBorder: boolean;
    private disableRailTooltip: boolean;
    private openOnHover: boolean;

    drawerOpenObs = new Subject<boolean>();
    drawerSelectObs = new Subject<boolean>();
    drawerActiveItemChangeObs = new Subject<boolean>();
    drawerNewNavItemInit = new Subject<void>();

    hasSideBorder(): boolean {
        return this.sideBorder;
    }

    setSideBorder(sideBorder: boolean): void {
        this.sideBorder = sideBorder;
    }

    isOpenOnHover(): boolean {
        return this.openOnHover;
    }

    setOpenOnHover(openOnHover: boolean): void {
        this.openOnHover = openOnHover;
    }

    setDisableActiveItemParentStyles(disableActiveItemParentStyles: boolean): void {
        this.disableActiveItemParentStyles = disableActiveItemParentStyles;
    }

    hasDisableActiveItemParentStyles(): boolean {
        return this.disableActiveItemParentStyles;
    }

    setDrawerTempOpen(open: boolean): void {
        this.tempOpen = open;
        this.drawerOpenObs.next(this.isDrawerOpen());
    }

    setIsCondensed(condensed: boolean): void {
        this.isCondensed = condensed;
    }

    setDrawerOpen(drawerOpen: boolean): void {
        this.drawerOpen = drawerOpen;
        this.drawerOpenObs.next(this.isDrawerOpen());
    }

    setDisableRailTooltip(disableRailTooltip: boolean): void {
        this.disableRailTooltip = disableRailTooltip;
    }

    isDisableRailTooltip(): boolean {
        return this.disableRailTooltip;
    }

    setDrawerVariant(variant: DrawerLayoutVariantType): void {
        this.variant = variant;
        this.drawerOpenObs.next(this.isDrawerOpen());
    }

    getDrawerVariant(): DrawerLayoutVariantType {
        return this.variant;
    }

    isDrawerOpen(): boolean {
        return (
            this.drawerOpen ||
            this.getDrawerVariant() === 'permanent' ||
            this.tempOpen ||
            this.getDrawerVariant() === 'rail'
        );
    }

    isTempOpen(): boolean {
        return this.tempOpen;
    }

    isRailCondensed(): boolean {
        return this.isCondensed;
    }

    drawerOpenChanges(): Observable<boolean> {
        return this.drawerOpenObs;
    }

    select(hasChildren: boolean): void {
        this.drawerSelectObs.next(hasChildren);
    }

    drawerSelectionChanges(): Observable<boolean> {
        return this.drawerSelectObs;
    }

    emitChangeActiveItemEvent(): void {
        this.drawerActiveItemChangeObs.next();
    }

    drawerActiveItemChanges(): Observable<boolean> {
        return this.drawerActiveItemChangeObs;
    }

    drawerNewNavItemCreated(): Observable<void> {
      return this.drawerNewNavItemInit;
    }

    emitNewNavItemCreated(): void {
      this.drawerNewNavItemInit.next();
    }

    /** Each nav item has a unique id which is used to determine which item is selected. */
    createNavItemID(): number {
        return ++this.navItemCount;
    }
}
