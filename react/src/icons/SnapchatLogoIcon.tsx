import React from 'react';
import config from '../config';

interface SnapchatLogoIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
}

/**
 * @name SnapchatLogoIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/snapchat-logo)
 * @see {@link https://clicons.dev/icon/snapchat-logo}
 */
const SnapchatLogoIcon = React.forwardRef<SVGSVGElement, SnapchatLogoIconProps>(
  ({ size, color, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';

    const iconData = [
  [
    'path',
    {
      fillRule: 'evenodd',
      d: 'M13.907 7.292c-.113-1.671-.702-3.792-3.765-3.792s-3.651 2.12-3.765 3.792c-.04.597-.502.92-1.1.949-.31.015-1.093-.377-1.093.134 0 1.083 2.166 1.083 2.166 2.167 0 1.083-1.625 2.708-2.708 3.25-1.083.541.344.713 1.083 1.083.74.37 1.018 1.466 2.167 1.083 1.15-.383 2.167.542 3.25.542 1.083 0 2.101-.925 3.25-.542 1.15.383 1.427-.713 2.167-1.083.74-.37 2.166-.542 1.083-1.083-1.083-.542-2.708-2.167-2.708-3.25 0-1.084 2.166-1.084 2.166-2.167 0-.51-.782-.119-1.093-.134-.598-.03-1.06-.352-1.1-.949Z'
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
        if (!processedAttrs.fill) processedAttrs.fill = finalColor;
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
        viewBox="0 0 20 20"
        fill="none"
        className={className}
        {...rest}
      >
        {iconData.map(renderElement)}
      </svg>
    );
  }
);

SnapchatLogoIcon.displayName = 'SnapchatLogoIcon';
export default SnapchatLogoIcon;
