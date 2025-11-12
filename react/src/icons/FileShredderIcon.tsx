import React from 'react';
import config from '../config';

interface FileShredderIconProps extends React.SVGAttributes<SVGSVGElement> {
  /** Size of the icon in pixels */
  size?: number;
  /** Color of the icon */
  color?: string;
  /** Stroke width of the icon */
  strokeWidth?: number;
  /** Use absolute stroke width, ignores scaling */
  absoluteStrokeWidth?: boolean;
}

/**
 * @name FileShredderIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/file-shredder)
 * @see {@link https://clicons.dev/icon/file-shredder} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const FileShredderIcon = React.forwardRef<SVGSVGElement, FileShredderIconProps>(
  (
    {
      size,
      color,
      strokeWidth,
      absoluteStrokeWidth,
      className = '',
      ...rest
    },
    ref
  ) => {
    const finalSize = size ?? config.defaultSize ?? 16;
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.8;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';

    const iconData = [
  [
    'path',
    {
      d: 'M22 12.999H2',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M20 13.001V10.6578C20 9.84033 20 9.43158 19.8478 9.06404C19.6955 8.69649 19.4065 8.40746 18.8284 7.8294L14.0919 3.09286C13.593 2.59397 13.3436 2.34453 13.0345 2.19672C12.9702 2.16598 12.9044 2.1387 12.8372 2.11499C12.5141 2.00098 12.1614 2.00098 11.4558 2.00098C8.21082 2.00098 6.58831 2.00098 5.48933 2.88705C5.26731 3.06606 5.06508 3.26829 4.88607 3.49031C4 4.58928 4 6.2118 4 9.45682V13.001M13 2.50098V3.00098C13 5.8294 13 7.24362 13.8787 8.1223C14.7574 9.00098 16.1716 9.00098 19 9.00098H19.5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M6 15.999V16.999M10 15.999V21.999M14 15.999V17.999M18 15.999V19.999',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ]
];

    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={finalSize}
        height={finalSize}
        viewBox="0 0 24 24"
        fill="none"
        className={className}
        {...rest}
      >
        {iconData.map(([tag, attrs]: any, index: number) => {
          const { key, ...restAttrs } = attrs;

          const mergedAttrs = {
            ...restAttrs,
            ...(tag === 'path' || tag === 'circle' || tag === 'rect' || tag === 'line' || tag === 'polyline' || tag === 'polygon'
              ? {
                  stroke: restAttrs.stroke ? restAttrs.stroke.replace('currentColor', finalColor) : finalColor,
                  fill: restAttrs.fill ? restAttrs.fill.replace('currentColor', finalColor) : restAttrs.fill,
                  strokeWidth: finalAbsoluteStrokeWidth
                    ? finalStrokeWidth
                    : typeof finalStrokeWidth !== 'undefined'
                      ? finalStrokeWidth
                      : restAttrs.strokeWidth,
                }
              : {}),
          };

          const Element = tag as any;
          return <Element key={index} {...mergedAttrs} />;
        })}
      </svg>
    );
  }
);

FileShredderIcon.displayName = 'FileShredderIcon';
export default FileShredderIcon;
