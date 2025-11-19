import React from 'react';
import config from '../config';

interface LockComputerIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name LockComputerIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/lock-computer)
 * @see {@link https://clicons.dev/icon/lock-computer}
 */
const LockComputerIcon = React.forwardRef<SVGSVGElement, LockComputerIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M12.9994 2H9.99936C6.22812 2 4.34251 2 3.17093 3.17157C1.99936 4.34315 1.99936 6.22876 1.99936 10C1.99936 13.7712 1.99936 15.6569 3.17093 16.8284C4.34251 18 6.22812 18 9.99936 18H13.9994C17.7706 18 19.6563 18 20.8278 16.8284C21.481 16.1752 21.77 15.3001 21.8979 14'
    }
  ],
  [
    'path',
    {
      d: 'M11.9994 18V22'
    }
  ],
  [
    'path',
    {
      d: 'M7.99936 22H15.9994'
    }
  ],
  [
    'path',
    {
      d: 'M10.9994 15H12.9994'
    }
  ],
  [
    'path',
    {
      d: 'M16.7501 5.37603C16.7501 5.31603 16.7487 4.55715 16.7501 4.12257C16.7514 3.72548 16.7165 3.34257 16.9061 2.99217C17.6165 1.57857 19.6565 1.72257 20.1605 3.16257C20.2478 3.39964 20.2531 3.77549 20.2505 4.12257C20.2472 4.56606 20.2565 5.37603 20.2565 5.37603M16.7501 5.37603C15.6701 5.37603 15.2165 6.15603 15.0965 6.63603C14.9765 7.11603 14.9765 8.85603 15.0485 9.57603C15.2885 10.476 15.8885 10.848 16.4765 10.968C17.0165 11.016 19.2965 10.998 19.9565 10.998C20.9165 11.016 21.6365 10.656 21.9365 9.57603C21.9965 9.21603 22.0565 7.23603 21.9065 6.63603C21.5885 5.67603 20.8565 5.37603 20.2565 5.37603M16.7501 5.37603H20.2565'
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

LockComputerIcon.displayName = 'LockComputerIcon';
export default LockComputerIcon;
