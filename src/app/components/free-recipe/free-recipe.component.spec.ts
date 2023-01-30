import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeRecipeComponent } from './free-recipe.component';

describe('FreeRecipeComponent', () => {
  let component: FreeRecipeComponent;
  let fixture: ComponentFixture<FreeRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeRecipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreeRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
