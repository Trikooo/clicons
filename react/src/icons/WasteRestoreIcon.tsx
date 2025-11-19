import React from 'react';
import config from '../config';

interface WasteRestoreIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name WasteRestoreIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/waste-restore)
 * @see {@link https://clicons.dev/icon/waste-restore}
 */
const WasteRestoreIcon = React.forwardRef<SVGSVGElement, WasteRestoreIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M3.25 5H8.67963C9.34834 5 9.9728 4.6658 10.3437 4.1094L11.1563 2.8906C11.5272 2.3342 12.1517 2 12.8204 2H17.3085C18.1693 2 18.9336 2.55086 19.2058 3.36754L19.75 5M21.25 5H8.25'
    }
  ],
  [
    'path',
    {
      d: 'M19.75 5L19.25 11.5M4.75 5L5.35461 15.5362C5.50945 18.1069 5.58688 19.3923 6.22868 20.3166C6.546 20.7736 6.9548 21.1593 7.42905 21.4492C8.01127 21.8051 8.71343 21.945 9.75 22'
    }
  ],
  [
    'path',
    {
      d: 'M11.25 15.498L12.3863 16.9638C12.958 14.8299 15.1514 13.5636 17.2852 14.1353C18.3775 14.428 19.2425 15.1456 19.75 16.0626M21.25 20.498L20.1137 19.0343C19.5419 21.1682 17.3486 22.4345 15.2147 21.8627C14.1478 21.5769 13.2977 20.8856 12.7859 19.999'
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

WasteRestoreIcon.displayName = 'WasteRestoreIcon';
export default WasteRestoreIcon;
