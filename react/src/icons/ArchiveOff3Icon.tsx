import React from 'react';
import config from '../config';

interface ArchiveOff3IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name ArchiveOff3Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/archive-off3)
 * @see {@link https://clicons.dev/icon/archive-off3}
 */
const ArchiveOff3Icon = React.forwardRef<SVGSVGElement, ArchiveOff3IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M2 2L22 22'
    }
  ],
  [
    'path',
    {
      d: 'M20 9V16M4 9V16C4 18.8284 4 20.2426 4.87868 21.1213C5.75736 22 7.17157 22 10 22H14C16.8284 22 18.2426 22 19.1213 21.1213C19.4634 20.7793 19.6723 20.3561 19.7999 19.7999'
    }
  ],
  [
    'path',
    {
      d: 'M8 4H19.5C20.4346 4 20.9019 4 21.25 4.20096C21.478 4.33261 21.6674 4.52197 21.799 4.75C22 5.09808 22 5.56538 22 6.5C22 7.43462 22 7.90192 21.799 8.25C21.6674 8.47803 21.478 8.66739 21.25 8.79904C20.9019 9 20.4346 9 19.5 9H13M9 9H4.5C3.56538 9 3.09808 9 2.75 8.79904C2.52197 8.66739 2.33261 8.47803 2.20096 8.25C2 7.90192 2 7.43462 2 6.5C2 5.56538 2 5.09808 2.20096 4.75C2.33261 4.52197 2.52197 4.33261 2.75 4.20096C3.0296 4.03954 3.38613 4.00778 4 4.00153'
    }
  ]
];

    const renderElement = (item: any, index: number): React.ReactElement => {
      const tag = item[0];
      const attrs = item[1];
      const children = item[2];
      const Element = tag as any;

      const processedAttrs: any = { ...attrs };

      // Apply color and stroke properties to shape elements
      const isShapeElement = ['path', 'circle', 'rect', 'line', 'polyline', 'polygon', 'ellipse'].includes(tag);

      if (isShapeElement) {
        if (!processedAttrs.stroke) processedAttrs.stroke = finalColor;
        if (!processedAttrs.fill) processedAttrs.fill = 'none';

        if (!processedAttrs.strokeWidth) {
          processedAttrs.strokeWidth = finalAbsoluteStrokeWidth
            ? finalStrokeWidth
            : finalStrokeWidth * (finalSize / 24);
        }
        if (!processedAttrs.strokeLinecap) processedAttrs.strokeLinecap = 'round';
        if (!processedAttrs.strokeLinejoin) processedAttrs.strokeLinejoin = 'round';
      }

      // Handle nested elements
      if (children) {
        if (Array.isArray(children)) {
          return <Element key={index} {...processedAttrs}>{children.map(renderElement)}</Element>;
        } else if (typeof children === 'string') {
          return <Element key={index} {...processedAttrs}>{children}</Element>;
        }
      }

      return <Element key={index} {...processedAttrs} />;
    };

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
        {iconData.map(renderElement)}
      </svg>
    );
  }
);

ArchiveOff3Icon.displayName = 'ArchiveOff3Icon';
export default ArchiveOff3Icon;
