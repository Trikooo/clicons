import React from 'react';
import config from '../config';

interface TwoFingerIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name TwoFingerIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/two-finger)
 * @see {@link https://clicons.dev/icon/two-finger}
 */
const TwoFingerIcon = React.forwardRef<SVGSVGElement, TwoFingerIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M17.091 10.9999V11.9999M17.091 10.9999C17.091 9.89537 16.2227 8.99994 15.1516 8.99994C14.6161 8.99994 14.182 9.44765 14.182 9.99993L14.1816 10.9999V3.49999C14.1816 2.67157 13.5304 2 12.7271 2C11.9237 2 11.2725 2.67157 11.2725 3.49999L11.2727 4.99998M17.091 10.9999C17.091 10.4765 17.5468 10.0783 18.0475 10.1643L18.3795 10.2214C19.3146 10.3821 20 11.2165 20 12.1942L19.9996 13.6667C19.9996 15.84 19.9996 16.9267 19.6786 17.7919C19.4924 18.2937 19.0011 18.9337 18.6083 19.3962C18.2685 19.7963 18.0603 20.3037 18.0603 20.8354V22M11.2727 4.99998C11.2727 4.17155 10.6215 3.49999 9.81824 3.49999C9.01493 3.49999 8.36373 4.17155 8.36373 4.99998L8.36353 13.4623L6.79236 11.837C6.103 11.1238 4.96746 11.1889 4.35844 11.9764C3.89244 12.579 3.87957 13.4314 4.32715 14.0488L7.81767 18.647C8.4855 19.5267 8.84836 20.8827 8.84836 22M11.2727 4.99998V9.99993'
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

TwoFingerIcon.displayName = 'TwoFingerIcon';
export default TwoFingerIcon;
