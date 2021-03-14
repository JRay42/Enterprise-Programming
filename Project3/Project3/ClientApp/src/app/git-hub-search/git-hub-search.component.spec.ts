import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitHubSearchComponent } from './git-hub-search.component';

describe('GitHubSearchComponent', () => {
  let component: GitHubSearchComponent;
  let fixture: ComponentFixture<GitHubSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitHubSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitHubSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
