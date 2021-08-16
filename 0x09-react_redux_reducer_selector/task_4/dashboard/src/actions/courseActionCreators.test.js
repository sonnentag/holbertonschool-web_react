import { selectCourse, unSelectCourse } from './courseActionCreators';

describe('courseActionCreators', () => {
  it('selects course', () => {
    const result = selectCourse(1);
    expect(result).toEqual({ type: SELECT_COURSE, index: 1 });
  });

  it('unselects course', () => {
    const result = unSelectCourse(1);
    expect(result).toEqual({ type: UNSELECT_COURSE, index: 1 });
  });
});
